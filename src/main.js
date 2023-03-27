import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { key } from './store/store';
const app = createApp(App);
app.use(router);
app.use(key, store);
app.mount('#app');
