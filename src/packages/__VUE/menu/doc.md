# Menu 菜单组件

### 介绍

下拉选择菜单组件

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Menu } from '@minerui/minerui';

const app = createApp();
app.use(Menu);
app.use(MenuItem);

```

## 代码演示

### 基础用法1

`Menu`  属性支持传入列表数据menuList和title名称设置。

```html
<miner-menu>
  <miner-menu-item :menu-list="menuList" title="最新商品" ></miner-menu-item>
  <miner-menu-item :menu-list="menuList" :title="title" ></miner-menu-item>
</miner-menu>
```
```js
 setup() {
    const resData = reactive({
      title: '热门推荐',
      menuList: [
        {value: '手机'},
        {value: '电脑'},
        {value: '家用电器'},
        {value: '日用百货'}
      ]
    });
 }

```

### 菜单多列展示

`Menu` 的 ` multiStyle` 属性配置1列、2列、3列展示菜单列表，默认单列展示。
`maxHeight` 属性可控制菜单列表的最大高度。

```html
<miner-menu>
    <miner-menu-item :menu-list="menuList2" title="单列展示" multi-style="1" maxHeight="200"></miner-menu-item>
    <miner-menu-item :menu-list="menuList2" title="双列展示"  multi-style="2"></miner-menu-item>
    <miner-menu-item :menu-list="menuList2" title="三列展示"  multi-style="3"></miner-menu-item>
</miner-menu>
```

### 禁用操作

`Menu` 的 `disabled` 属性可对菜单列表进行禁用操作。
`autoClose` 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。

```html
<miner-menu>
    <miner-menu-item :menu-list="menuList" title="最新商品"></miner-menu-item>
    <miner-menu-item :menu-list="menuList" title="title" :auto-close="false"></miner-menu-item>
    <miner-menu-item :menu-list="menuList2" title="筛选" disabled ></miner-menu-item>
</miner-menu>
```

### 禁止蒙层展示
属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 

```html
<miner-menu :hasMask="false">
    <miner-menu-item :menu-list="menuList" title="最新商品">
    </miner-menu-item>
    <miner-menu-item :menu-list="menuList" :title="title">
    </miner-menu-item>
</miner-menu>
```

### 点击事件

`Menu` 的 `@menu-click` 事件返回点击的菜单标题，`@change`事件返回菜单列表选中的数据。

```html
<miner-menu>
    <miner-menu-item
        :menu-list="menuList2"
        title="选择菜单列表项"
        multi-style="2"
        @menu-click="alertText($event, 'title')"
        @change="getChecked"
    ></miner-menu-item>
    <miner-menu-item
        :menu-list="menuList2"
        title="选中标题触发"
        disabled
        @menu-click="alertText"
    ></miner-menu-item>
 </miner-menu>
```
```js
const getChecked = (info: any, name: string) => {
    alert('选择菜单选项：' + name);
    console.log(11, info, name);
};
const alertText = (info, type) => {
    console.log(info, type);
    if (type == 'title') {
        alert('菜单标题点击：' + info);
    } else {
        alert('禁用操作');
    }
};
```

### 自定义内容


```html
<miner-menu>
    <miner-menu-item title="自定义选项">
        <div class="user-style">
          <miner-cell>
            设置为默认 <miner-switch></miner-switch>
          </miner-cell>
          <miner-cell>
            <miner-button size="large" type="primary">确认提交</miner-button>
          </miner-cell>
        </div>
    </miner-menu-item>
</miner-menu>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title         | 菜单标题名称或可为菜单列表第一项，必填     | String | -                |
| menu-list        | 菜单列表数据，必填                     | Array | -                |
| multi-style        | 列表列数设置，默认1列，可选值 `1` `2` `3` | String, Number | 1                |
| disabled | 是否开启禁用设置，默认不开启    | Boolean | false |
| max-height | 菜单列表最大高度，单位px    | String, Number | - |
| auto-close | 选择后下拉菜单列表是否自动收起，默认自动收起   | Boolean | true |
|has-mask| 是否有蒙层 | Boolean | true|

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| menu-click  | 点击菜单标题触发，返回菜单标题名称 | event: Event |
| change  | 点击菜单列表选项触发，返回选中菜单项数据、名称 | event: Event |