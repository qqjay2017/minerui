import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import MinerUI from '@/packages/minerui.vue';
import '@/sites/assets/styles/reset.scss';
import '@/packages/utils/touchEmulator';
createApp(App)
  .use(router)
  .use(MinerUI)
  .mount('#app');
