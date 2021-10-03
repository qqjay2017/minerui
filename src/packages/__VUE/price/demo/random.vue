<template>
  <miner-price :price="price" :decimal-digits="3" :need-symbol="true" :thousands="true" />
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';

const price = ref(0);
const inter = setInterval(() => {
  price.value = Math.random() * 10000000;
}, 1000);

onUnmounted(() => {
  clearInterval(inter);
});
</script>
