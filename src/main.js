import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import './assets/base.scss';

createApp(App).use(store).mount('#app');
