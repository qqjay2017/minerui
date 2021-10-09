#  Pagination 分页

### 介绍
    
当数据量较多时，采用分页的形式分隔长列表。
    
### 安装
``` javascript
import { createApp } from 'vue';
import { Pagination,Icon } from '@minerui/minerui';

const app = createApp();
app.use(Pagination).use(Icon);
```    
    
### 基本使用

通过 v-model 来绑定当前页码。

```vue demo src="./demo/base.vue"

```

### 简单模式
将 mode 设置为 simple 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```vue demo src="./demo/simple.vue"

```

### 显示省略号


```vue demo src="./demo/ellipses.vue"

```


### hotfil样式


```vue demo src="./demo/hotfil.vue"

```

### 自定义显示


```vue demo src="./demo/customize.vue"

```

    
## API
    
### Props
    
| 参数           | 说明                     | 类型          | 默认值            |
|----------------|--------------------------|---------------|-------------------|
| v-model        | 当前页码                 | Number        | 1                 |
| mode           | 显示模式,可选值为 simple | String        | multi             |
| prev-text      | 上一页按钮文字           | String        | 上一页            |
| next-text      | 下一页按钮文字           | String        | 下一页            |
| page-count     | 总页数                   | String,Number | 传入/根据页数计算 |
| total-items    | 总记录数                 | String,Number | 0                 |
| items-per-page | 每页记录数               | String,Number | 10                |
| show-page-size | 显示的页码个数           | String,Number | 5                 |
| force-ellipses | 是否显示省略号           | Boolean       | false             |
    
### Events
    
| 事件名 | 说明           | 回调参数 |
|--------|----------------|----------|
| change | 页码改变时触发 | value    |

### Slots
    
| 名称      | 描述                 | 参数 |
|-----------|----------------------|------|
| prev-text | 自定义上一页按钮内容 | -    |
| next-text | 自定义下一页按钮内容 | -    |
| page      | 自定义页码           | -    |