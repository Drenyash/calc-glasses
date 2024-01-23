export default {
    getTabs(state) {
        return state.items;
    },
    getValue: (state) => (key) => {
        return state[key];
    },
    getTabValue: (state) => (key, value) => {
        if (key !== 'drilling') {
            return state.items[state.activeTab][key];
        } else {
            if (state.items[state.activeTab][key]) {
                if (value) {
                    return state.items[state.activeTab][key][value - 1]['count'];
                } else {
                    return state.items[state.activeTab][key].length
                }
            }
        }
    },
    getCurrentValue: (state) => {
      return state.items[state.activeTab].currentValue
    },
    getTabValueMilling: (state) => (key) => {
        return state.items[state.activeTab][key]
    },
    getItems: (state) => (key) => {
        return state[key];
    },
    getActiveTab(state) {
        return state.activeTab;
    },
    getDrawingFiles(state) {
        return state.items[state.activeTab].drawingFiles
    },
    getMaterialById(state) {
        const materialId = state.items[state.activeTab].id;
        try {
            return state.materials[materialId];
        } catch (e) {
            return null;
        }
    },
    getSizes(state) {
        const materialId = state.items[state.activeTab].id;
        try {
            return state.materials[materialId];
        } catch (e) {
            return null;
        }
    }
}
