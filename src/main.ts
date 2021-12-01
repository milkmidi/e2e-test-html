import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './css/app.scss';
import router from './router';

// prettier-ignore
createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
