// import dataProfiles from "./dataProfiles";
// import dataMaterials from "./dataMaterials";
// import dataDrillings from "./dataDrillings";
// import dataTypesMilling from "./dataTypesMilling";
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default {
    init(state) {
        if (!state.items.length) {
            this.commit('createTab');
            this.commit('setActiveTab', {value: 0, rewrite: false});
        }

        this.commit('getDefaultData');
    },
    getDefaultData(state) {
        if (!state.materials || !state.drillings) {
            this.dispatch('getData');
        }
    },
    setUserValue(state, payload) {
        state.user[payload.key] = payload.value;
    },
    setData(state, data) {
        state.materials = data.materials;
        state.user = data.getUser;
    },
    createTab(state) {
        state.items.push({
            price: 0,
            width: 0,
            height: 0,
            quantity: 0,
            processingType: [],
            allowMillings: [],
            milling: [
                {
                    millingType: 0,
                    content: [],
                },
                {
                    millingType: 1,
                    content: [],
                },
                {
                    millingType: 2,
                    content: [],
                }
            ],
            drawingFiles: [],
            selectedMaterial: null,
            maxValues: 10,
            currentValue: 0,
            message: ''
        });

        const rewriteParam = state.items.length > 1;

        this.commit('setActiveTab', {value: state.items.length - 1, rewrite: rewriteParam});
    },
    async setActiveTab(state, val) {
        if (val.rewrite) {
            this.commit('setActiveStatus', true);

            try {
                await this.dispatch('generateImage');
                console.log('Генерим картинку');
            } catch (e) {
                console.error('Ошибка генерации изображения');
            }

            this.commit('setActiveStatus', false);
        }

        state.activeTab = val.value;
    },
    setDrawingFiles(state, data) {
        state.items[state.activeTab].drawingFiles.push(data)
    },
    removeDrawingFiles(state, idx) {
        if (idx) {
            state.items[state.activeTab].drawingFiles.splice(state.items[state.activeTab].drawingFiles.indexOf(idx.id), 1);
        } else {
            state.items[state.activeTab].drawingFiles = [];
        }
    },
    setTabValue(state, data) {
        if (data.key !== 'drilling' && data.key !== 'milling') {
            state.items[state.activeTab][data.key] = data.value;
        } else {
            if (data.millingType) {
                let arr = [];
                console.log(state.items[state.activeTab][data.key][data.millingType - 1]['content'])
                state.items[state.activeTab][data.key][data.millingType - 1]['content'].length = data.value;
                for (let i = 0; i < state.items[state.activeTab][data.key].length; i++) {
                    arr.push(state.items[state.activeTab][data.key][i]['content'].length)
                }
                state.items[state.activeTab].currentValue = arr.reduce((acc, curr) => acc + curr);

                console.log(state.items[state.activeTab][data.key])
            }
        }
    },
    setMillingData(state, data) {
        state.items[state.activeTab]['millingData'].push(data.element)
    },
    setProcessingType(state, data) {
        state.items[state.activeTab][data.key].push(data.value);
    },
    removeProcessingType(state, data) {
        state.items[state.activeTab][data.key].splice(state.items[state.activeTab][data.key].indexOf(data.value), 1);
    },
    setTabArray(state, data) {
        if (state.items[state.activeTab][data.key][data.millingType]['content']) {
            state.items[state.activeTab][data.key][data.millingType]['content'][data.index] = data.val;
        }
        console.log(state.items[state.activeTab][data.key])
        // if (state.items[state.activeTab][data.key][data.millingType]['content']) {
        //     state.items[state.activeTab][data.key][data.millingType]['content'][data.index] = data.val;
        // }
    },
    setPrice(state, data) {
        state.items.forEach((item, index) => {
            item.price = Math.ceil(data[index].price);
        });

        state.price = Math.ceil(data["full"]["price"]);
    },
    setActiveStatus(state, status) {
        state.loading = status;
    },
    setButtonMessage(state, message) {
        state.buttonMessage = message;
    },
    removeTab(state) {
        const length = state.items.length;
        const active = state.activeTab;

        if (length <= 1) return false;

        if (active !== 0) {
            state.activeTab = active - 1;
            state.items.splice(active, 1);
        } else {
            state.items.splice(active, 1);
            state.activeTab = 0;
        }
    },
    setFile(state, payload) {
        state.items[state.activeTab].file = payload;

        console.log(state);
    }
}
