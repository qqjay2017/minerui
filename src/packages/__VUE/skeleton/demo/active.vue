<template>
  <div class="">
    <div>
      <miner-button @click="changeActive">{{ isActive ? '关闭动画' : '打开动画' }}</miner-button>
    </div>
    <div>
      <miner-skeleton :active="isActive" type="round" :size="30" />
      <miner-skeleton :active="isActive" type="line" :size="30" :width="200" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);
const changeActive = () => {
  isActive.value = !isActive.value;
};
</script>
