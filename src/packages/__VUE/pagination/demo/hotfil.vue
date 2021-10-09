<template>
  <div>
    <h1>{{ currentPage3 }}</h1>
    <miner-pagination v-model="currentPage3" :total-items="500" @change="pageChange" :show-page-size="5">
      <template #prev-text>
        <miner-icon name="left" size="10px" />
      </template>
      <template #next-text>
        <miner-icon name="right" size="10px" />
      </template>
    </miner-pagination>
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
