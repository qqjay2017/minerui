# CopyAble 点击复制

### 介绍

CopyAble用于页面中需要复制文本的需求,如复制钱包。

### 安装

```javascript
import { createApp } from 'vue';
import { CopyAble } from '@minerui/minerui';
const app = createApp();
app.use(CopyAble);
```


## 代码演示

### 基本使用

`showText`传入需要展示的字符串,同时也是点击复制的字符串

```vue demo src="./demo/base.vue"

```


### 单独指定复制字符串

`copyText`传入需要复制的字符串,没传时候将使用`showText`

```vue demo src="./demo/showText.vue"

```

### 单独指定复制字符串

`copy`事件

```vue demo src="./demo/copy.vue"

```



## API

|   参数   | 说明                                      | 类型     | 默认值 |
| :------: | :---------------------------------------- | :------- | :----- |
| showText | 左侧展示的字符串,没有的话将使用`copyText` | `string` | -      |
| copyText | 复制的字符串,没有的话将使用 `showText`     | `string` | -      |

## 事件

| 参数 | 说明                             | 类型                   | 默认值 |
| :--: | :------------------------------- | :--------------------- | :----- |
| copy | 复制完成的回调,flag:复制是否成功 | (flag:Boolean) => void | -      |