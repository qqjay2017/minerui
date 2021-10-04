
# Empty 空内容

### 介绍

Empty用于无数据时候进行占位和展示

### 安装

```javascript
import { createApp } from 'vue';
import { Empty } from '@minerui/minerui';
const app = createApp();
app.use(Empty);
```


## 代码演示

### 基本使用

默认展示主标题和一张主图

```vue demo src="./demo/base.vue"

```

### 指定标题

`mainTitle`指定主标题,`subTitle`指定副标题

```vue demo src="./demo/title.vue"

```

### 主图

提供`svg`插槽

```vue demo src="./demo/svg.vue"

```

### 多语言,todo

## API

参数				|说明      | 类型   | 默认值
:----:			|:---   |:---   |:---
mainTitle			|上面的标题啊  | `string` | "No Data"
subTitle			|下面的标题  | `string` | -

## 插槽

参数				|说明      
:----:			|:---   
svg			|主图插槽  |