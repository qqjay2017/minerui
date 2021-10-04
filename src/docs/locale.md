# 多语言 

## 内置中文和英文语言包

> 默认英文

## 方式1:当全局引入时

通过`locale`属性传入语言包,`zh`是内置的中文语言包,也可以自己写,下文介绍结构

```ts
import { createApp } from 'vue';
import App from './App.vue';
import MinerUI, { zh } from '@/packages/minerui.vue';

createApp(App)
  .use(MinerUI, {
    locale: zh
  })
  .mount('#app');
```

## 方式2:使用Config组件

`Config`组件的locale属性传入语言包,后期Config组件将会支持更多属性


```vue
<template>
  <miner-config :locale="zh">
    <router-view />
  </miner-config>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { zh } from '@/packages/minerui.vue';
export default defineComponent({
  name: 'app',
  setup() {
    return {
      zh
    };
  }
});
</script>
```

## 暴露出来的useLocaleInject方法

// TODO

```ts
const { t } = useLocaleInject();
```

## 自己写语言包

语言包是一个对象结构

```ts
const zh = {
  name: 'zh',
  message: {
    table: {
      emptyText: '暂无数据'
    },
    empty: {
      mainTitle: '暂无数据'
    }
  }
};


```

