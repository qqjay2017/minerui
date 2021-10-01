import { createApp } from 'vue';
import './app.scss';
import MinerUI from '../../../../packages/minerui.taro.vue';
// import MinerUI from '@minerui/minerui-taro';
// import '@minerui/minerui-taro/dist/style.css';
const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(MinerUI);

export default App;
