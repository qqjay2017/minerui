# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

``` javascript
import { createApp } from 'vue';
import { Cell,Icon } from '@minerui/minerui';

const app = createApp();
app.use(Cell).use(Icon);
```


### 基本用法

``` html
<miner-cell title="我是标题" desc="描述文字"></miner-cell>
<miner-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></miner-cell>
<miner-cell title="点击测试" @click="testClick"></miner-cell>
<miner-cell title="圆角设置 0" round-radius="0"></miner-cell>
```

``` javascript
// ...
import { ref } from 'vue';
import { Toast } from '@minerui/minerui';
export default {
  setup() {
      const switchChecked = ref(true);
      const testClick = (event) => {
        Toast.text('点击事件')
      };
      return { testClick,switchChecked };
  }
}
// ...
```

### 直接使用插槽

``` html
 <miner-cell title="我是标题" desc="描述文字">
  <div>自定义内容</div>
 </miner-cell>  
```

### 链接 | 分组用法

``` html
<miner-cell-group title="链接 | 分组用法">
  <miner-cell title="链接" is-link></miner-cell>
  <miner-cell title="URL 跳转" desc="https://jd.com" is-link url="https://jd.com"></miner-cell>
  <miner-cell title="路由跳转 ’/‘ " to="/"></miner-cell>
</miner-cell-group>
```

### 自定义右侧箭头区域

``` html
<miner-cell-group title="自定义右侧箭头区域">
  <miner-cell title="Switch">
    <template v-slot:link>
      <miner-switch v-model="switchChecked" />
    </template>
  </miner-cell>
</miner-cell-group>
```
### 自定义左侧 Icon 区域

``` html
<miner-cell-group title="自定义左侧 Icon 区域">
  <miner-cell title="图片">
    <template v-slot:icon>
      <img class="miner-icon" src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />
    </template>
  </miner-cell>
</miner-cell-group>
```

### 单元格展示图标

``` html
<miner-cell title="姓名" icon="my" desc="张三"></miner-cell>
```
### 只展示 desc ，可通过 desc-text-align 调整内容位置

``` html
<miner-cell desc-text-align="left" desc="张三"></miner-cell>
```

## API

### Prop

| 字段                   | 说明                                                                                           | 类型    | 默认值 |
|------------------------|------------------------------------------------------------------------------------------------|---------|--------|
| title                  | 标题名称                                                                                       | String  | -      |
| sub-title              | 左侧副标题                                                                                     | String  | -      |
| desc                   | 右侧描述                                                                                       | String  | -      |
| desc-text-align        | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp)   | String  | right  |
| is-link                | 是否展示右侧箭头并开启点击反馈                                                                 | Boolean | false  |
| icon                   | 左侧 [图标名称](#/icon) 或图片链接                                                             | String  | -      |
| round-radius           | 圆角半径                                                                                       | Number  | 6px    |
| url `小程序不支持`     | 点击后跳转的链接地址                                                                           | String  | -      |
| to   `小程序不支持`    | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | String｜Object | -      |
| replace `小程序不支持` | 是否在跳转时替换当前页面历史                                                                   | Boolean | false  |

### Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 点击事件 | event:Event |


## Slots

| 名称          | 说明                 |
|---------------|----------------------|
| icon `v3.1.4` | 自定义左侧 icon 区域 |
| default       | 自定义内容           |
| link          | 自定义右侧 link 区域 |

