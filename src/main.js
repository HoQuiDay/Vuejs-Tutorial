import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
const app = createApp(App);
// createApp(App).use(bootstrap).use(router).mount('#app');
app.use(router);
app.mount('#app');
