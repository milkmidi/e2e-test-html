import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './css/app.css';

// prettier-ignore
createApp(App)
  .use(createPinia())
  .mount('#app');
