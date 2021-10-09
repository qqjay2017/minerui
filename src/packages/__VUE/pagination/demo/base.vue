<template>
  <div>
    <h1>{{ currentPage }}</h1>
    <miner-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
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
