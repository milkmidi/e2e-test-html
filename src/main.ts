/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
//
import App from './App.vue';
import router from './router';
import './components/DevelopmentStickyElement';
//
import './css/app.scss';
import './css/style.scss';

// prettier-ignore
createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');

console.info(`%c${process.env.BUILD_INFO}`, 'background:#00cec9;color:white;font-size:20px;');
document.documentElement.setAttribute('data-build-info', process.env.BUILD_INFO);
