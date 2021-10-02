# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```javascript
import { createApp } from 'vue';
//vue
import { Steps, Step } from '@minerui/minerui';


const app = createApp();
app.use(Steps);
app.use(Step);
```

## 代码演示

### 基本用法

```html
<miner-steps current="1">
  <miner-step title="进行中">1</miner-step>
  <miner-step title="未开始">2</miner-step>
  <miner-step title="未开始">3</miner-step>
  <miner-step title="未开始">4</miner-step>
</miner-steps>
```

### 标题和描述信息

```html
<miner-steps current="2">
  <miner-step title="已完成" content="步骤描述" icon="minerui-iconfont miner-icon-wanshangshide">1</miner-step>
  <miner-step title="进行中" content="步骤描述">2</miner-step>
  <miner-step title="未开始" content="步骤描述">3</miner-step>
</miner-steps>
```

### 自定义图标

```html
<miner-steps current="1">
  <miner-step title="已完成" icon="minerui-iconfont miner-icon-wanshangshide" status="error">1</miner-step>
  <miner-step title="进行中" icon="minerui-iconfont miner-icon-notice">2</miner-step> 
  <miner-step class="miner-step-wait" title="未开始" icon="minerui-iconfont miner-icon-notice">3</miner-step>
</miner-steps>
```

### 竖向步骤条

```html
<miner-steps direction="vertical" current="2">
  <miner-step title="已完成" icon="minerui-iconfont miner-icon-wanshangshide" content="您的订单已经打包完成，商品已发出" >1</miner-step>
  <miner-step title="进行中" content="您的订单正在配送途中" >2</miner-step>
  <miner-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</miner-step>
</miner-steps>
```

### 点状步骤和垂直方向
```html
<miner-steps direction="vertical" progress-dot current="2">
  <miner-step title="已完成" content="您的订单已经打包完成，商品已发出" >1</miner-step>
  <miner-step title="进行中" content="您的订单正在配送途中">2</miner-step>
  <miner-step title="未开始" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</miner-step>
</miner-steps>
```


## API

### Props

#### miner-steps

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	显示方向，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	当前所在的步骤           | Number、String        | '0'      |
| progress-dot            |  点状步骤条     | Boolean | false         |



#### miner-step

| 参数           | 说明                   | 类型     | 默认值      |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | 流程步骤的标题         | String | 步骤 |
| content          | 流程步骤的描述性文字(支持 html 结构)       | String | 步骤描述 |
| icon          | 图标       | String | null |