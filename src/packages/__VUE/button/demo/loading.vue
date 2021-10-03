<template>
  <div class="demo-space">
    <miner-button loading type="info"></miner-button>
    <miner-button loading type="warning">加载中...</miner-button>
    <miner-button :loading="isLoading" type="success" @click="changeLoading">Click me!</miner-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue';
let isLoading = ref(false);
const changeLoading = () => {
  isLoading.value = !unref(isLoading);
};
</script>
