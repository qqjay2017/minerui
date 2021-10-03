import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';
import DemoBlock from './components/demo-block';
import { Hover } from './directive/hover/hover';
import MinerUI from '@/packages/minerui.vue';
createApp(App).directive('hover', Hover).component('demo-block', DemoBlock).use(router).use(MinerUI).mount('#doc');
