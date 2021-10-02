# svgIcon 在线svg图标

### 介绍

基于 [iconify](https://icon-sets.iconify.design) 图标集，图标数据在`https://icon-sets.iconify.design`获取

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { SvgIcon } from '@minerui/minerui';


const app = createApp();
app.use(SvgIcon);

```

## 代码演示

### 基础用法

`SvgIcon` 的 `name` 属性支持传入[图标名称](https://icon-sets.iconify.design/mdi/airplane-takeoff/)。

```html
<miner-svgicon name="ant-design:github-filled"></miner-svgicon>
<miner-svgicon name="mdi:airplane-takeoff"></miner-svgicon>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html 
<miner-svgicon name="ant-design:github-filled" color="#fa2c19"></miner-svgicon>
<miner-svgicon name="mdi:airplane-takeoff" color="#64b578"></miner-svgicon>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<miner-svgicon name="ant-design:github-filled"></miner-svgicon>
<miner-svgicon name="mdi:airplane-takeoff" size="24"></miner-svgicon>
<miner-svgicon name="mdi:airplane-takeoff" size="26"></miner-svgicon>

### 图标前缀

`Icon` 的 `prefix` 属性用来设置图标前缀。

```html
<miner-svgicon prefix="ant-design" name="github-filled"></miner-svgicon>
<miner-svgicon prefix="mdi" name="airplane-takeoff" size="24"></miner-svgicon>
```


## API

### Props

| 参数         | 说明                             | 类型             | 默认值           |
|--------------|----------------------------------|------------------|------------------|
| name         | 图标名称或图片链接               | String           | -                |
| color        | 图标颜色                         | String           | -                |
| size         | 图标大小，如 `20px` `2em` `2rem` | String or Number | -                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |

