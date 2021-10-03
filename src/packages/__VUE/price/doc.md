# Price 商品价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。
显示数值将会经过`toFixed`处理

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Price } from '@minerui/minerui';


const app = createApp();
app.use(Price);

```


### 基本用法


```vue demo src="./demo/base.vue"

```

### 有人民币符号，无千位分隔



```vue demo src="./demo/symbol.vue"

```

### 带人民币符号，有千位分隔，保留小数点后三位

```vue demo src="./demo/digits.vue"

```

### 美元

```vue demo src="./demo/dollar.vue"

```

### 单位在后面


```vue demo src="./demo/unit.vue"

```


### 异步随机变更



```vue demo src="./demo/random.vue"

```

### Prop

| 字段           | 说明                     | 类型    | 默认值 |
|----------------|--------------------------|---------|--------|
| price          | 价格数量                 | Number  | 0      |
| need-symbol    | 是否需要加上 symbol 符号 | Boolean | true   |
| symbol         | 符号类型                 | String  | &yen;  |
| decimal-digits | 小数位位数               | Number  | 2      |
| thousands      | 是否按照千分号形式显示   | Boolean | false  |
| unit      | 后面的单位   | String | ''  |