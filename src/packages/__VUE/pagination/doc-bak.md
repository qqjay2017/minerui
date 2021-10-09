### 基础用法
通过 v-model 来绑定当前页码。
``` html
<miner-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
```  
``` javascript
export default {
  setup() {
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    });
    const pageChange = (value) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
```
### 简单模式
将 mode 设置为 simple 来切换到简单模式，此时分页器不会展示具体的页码按钮。
``` html
<miner-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
```  
### 显示省略号
设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。
``` html
<miner-pagination v-model="currentPage2" :total-items="125" :show-page-size="3"  @change="pageChange"  force-ellipses/>
``` 
### 自定义按钮
设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。
``` html
<miner-pagination v-model="currentPage3" :total-items="500"  @change="pageChange"  :show-page-size="5">
    <template #prev-text>
        <miner-icon name="left" size="10px" />
    </template>
    <template #next-text>
        <miner-icon name="right" size="10px" />
    </template>
    <template #page="{ item }">
        {{ item.number == 3 ? 'hot' : item.text }}
    </template>
</miner-pagination>
``` 