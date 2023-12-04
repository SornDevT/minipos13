import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Menu from './components/MenuSidebar.vue';

import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('MenuSideBar',Menu)
app.mount('#app-vue');
