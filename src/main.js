import { createApp } from 'vue';
import App from './App.vue';
import store from './store/main';

import './assets/main.scss';

const app = createApp(App).use(store);

app.mount('#app');
