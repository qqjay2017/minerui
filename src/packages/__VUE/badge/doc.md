# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Badge } from '@minerui/minerui';

const app = createApp();
app.use(Badge);

```

### 代码实例

### 基本用法

```html
<miner-badge :value="8">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge :value="76">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge value="NEW">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge dot>
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
```

### 最大值

```html
<miner-badge :value="200" :max="9">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge :value="200" :max="20">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge :value="200" :max="99">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
```

### 自定义颜色

```html
<miner-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
```

### 自定义徽标内容

```html
<miner-badge>
  <template #icons>
    <miner-icon name="Check" color="#ffffff" size="12"></miner-icon>
  </template>
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge>
  <template #icons>
    <miner-icon name="link" color="#ffffff" size="12"></miner-icon>
  </template>
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge>
  <template #icons>
    <miner-icon name="download" color="#ffffff" size="12"></miner-icon>
  </template>
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
```

### 自定义位置

```html
<miner-badge :value="8" top="5" right="5">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge :value="76" top="10" right="10">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
<miner-badge value="NEW">
  <miner-avatar icon="my" shape="square"></miner-avatar>
</miner-badge>
```

### 独立展示

```html
<miner-badge :value="8"> </miner-badge>
<miner-badge :value="76"> </miner-badge>
<miner-badge value="NEW"> </miner-badge>
```


### Prop  

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| value   | 显示的内容                                 | String  | -         |
| max     | value 为数值时，最大值                     | Number  | `10000`   |
| z-index | 徽标的 z-index 值                          | Number  | `10`      |
| dot     | 是否为小点                                 | Boolean | `false`   |
| hidden  | 是否隐藏                                   | Boolean | `false`   |
| top     | 上下偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| right   | 左右偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| color   | 徽标背景颜色                               | String  | `#fa2c19` |

### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 	徽标包裹的子元素 |
| icons | 	徽标自定义 |
