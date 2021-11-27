import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './css/app.scss';

// prettier-ignore
createApp(App)
  .use(createPinia())
  .mount('#app');
