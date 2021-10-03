# CoinAvatar 币种头像

### 介绍

CoinAvatar币种小头像,用于展示对应的币种

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { CoinAvatar } from '@minerui/minerui';


const app = createApp();
app.use(CoinAvatar);

```

## 代码演示

### 基础用法

`CoinAvatar` 的 `coin` 属性支持传入币种名称。

```vue demo src="./demo/base.vue"

```

### 图标大小

`CoinAvatar` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```vue demo src="./demo/size.vue"

```

### 线上币种头像

`CoinAvatar` 的 `coin` 属性如果不是本地支持的,将会使用线上地址。

```vue demo src="./demo/online.vue"

```

## API

### Props

| 参数         | 说明                             | 类型             | 默认值           |
|---------|--------|-----|--------|
coin			|币种名称  | `CoinName` | -
size |尺寸| `Number` | '22'
imgSrc |币种头像| `String` | -

## 本地支持的CoinName,如果不支持将会使用线上地址

- 'ae',
- 'beam',
- 'bfc',
- 'btm',
- 'cfx',
- 'ckb',
- 'dcr',
- 'ergo',
- 'etc',
- 'eth',
- 'etp',
- 'grin',
- 'hns',
- 'kda',
- 'lbc',
- 'moac',
- 'noicon',
- 'pasc',
- 'pgn',
- 'rvn',
- 'sc',
- 'sero',
- 'trb',
- 'vbk',
- 'vds',
- 'vns',
- 'xmr',
- 'xvg',
- 'zcl'

