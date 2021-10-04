
# Skeleton 骨架屏

### 介绍

Skeleton用于加载数据时候进行占位和优化用户体验

### 安装

```javascript
import { createApp } from 'vue';
import { Skeleton } from '@minerui/minerui';
const app = createApp();
app.use(Skeleton);
```


## 代码演示

### 基本使用


```vue demo src="./demo/base.vue"

```

### 指定type

`type`支持`line`和`round`,默认line

```vue demo src="./demo/type.vue"

```

### 指定尺寸

`size`指定大小,如果`type`为`line`时,还支持`width`属性指定宽度

```vue demo src="./demo/size.vue"

```

### active

`active`属性控制动画

```vue demo src="./demo/active.vue"

```

## API

参数				|说明      | 类型   | 默认值
:----:			|:---   |:---   |:---
type			| 类型  | `line |  round` | `line`
active			| 是否激活   | `boolean` | `true`
limit			| 尺寸   | `number` |  `16`
width  	| 宽度,只有type是line的时候才生效   |   `number | string` |  `'100%'`

