<template>
  <div>
    <h1>{{ currentPage2 }}</h1>
    <miner-pagination
      v-model="currentPage2"
      :total-items="125"
      :show-page-size="3"
      @change="pageChange"
      force-ellipses
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';

export default defineComponent({
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
});
</script>
