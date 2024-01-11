import axios from 'axios';
import {createImage} from "./createImage";

export default {
    getData() {
        axios.get('https://baltlaminat.ru/api/glasses/GetDataFull')
            .then(response => {
                console.log('Все данные', response.data);
                this.commit('setData', response.data);
            })
            .catch(response => console.error(response));
    },
    sendClearData(store) {
        this.commit('setActiveStatus', true);

        const json = JSON.stringify(store.state.items);
        const user = JSON.stringify(store.state.user);

        const formData = new FormData();

        formData.append('data', json);
        formData.append('user', user);

        axios.post('https://baltlaminat.ru/api/calculateGlasses', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
                this.commit('setPrice', response.data);
                this.commit('setActiveStatus', false);
            })
            .catch((error) => {
                console.error(error);
                this.commit('setActiveStatus', false);
            });
    },
    async sendResultData(store) {
        this.commit('setActiveStatus', true);
        this.commit('setButtonMessage', 'Отправка...');

        await this.dispatch('generateImage');

        const json = JSON.stringify(store.state.items);
        const user = JSON.stringify(store.state.user);

        const formData = new FormData();

        formData.append('data', json);
        formData.append('user', user);

        axios.post('https://baltlaminat.ru/api/sendDataGlasses/index.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
                this.commit('setButtonMessage', 'Отправлено!');

                setTimeout(() => {
                    this.commit('setActiveStatus', false);
                    this.commit('setButtonMessage', 'Оформить заказ')
                }, 3000);
            })
            .catch((error) => {
                console.error(error);
                this.commit('setButtonMessage', 'Ошибка!');

                setTimeout(() => {
                    this.commit('setButtonMessage', 'Оформить заказ');
                    this.commit('setActiveStatus', false);
                }, 3000);
            });
    },

    async generateImage(store) {
        console.log(2);
        const data = await createImage(store);

        this.commit('setFile', data);
        console.log(6);
    }
}
