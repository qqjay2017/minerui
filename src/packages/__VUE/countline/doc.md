# CountLine 数量条

### 介绍

CountLine用于页面中展示数量的占比情况

### 安装

```javascript
import { createApp } from 'vue';
import { CountLine } from '@minerui/minerui';
const app = createApp();
app.use(CountLine);
```


## 代码演示

### 基本使用

`color`传入颜色数据数组,`count`传入数量数据数组

```vue demo src="./demo/base.vue"

```

### 排序反转

`reverse`属性表示排序反转

```vue demo src="./demo/reverse.vue"

```

### 圆角

`round`属性表示圆角数量条

```vue demo src="./demo/round.vue"

```


## API



参数				|说明      | 类型   | 默认值
:----:			|:---   |:---   |:---
color			|颜色数组  | `string[]` | -
count			|数量数组  | `string[]` | -
round			|圆角展示  | `Boolean` | `false`
reverse			|反向展示  | `Boolean` | `false`


