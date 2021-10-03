<template>
  <div class="demo-space">
    <miner-cell title="我是标题" desc="描述文字"></miner-cell>
    <miner-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></miner-cell>
    <miner-cell title="点击测试" @click="testClick"></miner-cell>
    <miner-cell title="圆角设置 0" round-radius="0"></miner-cell>
  </div>
</template>

<script lang="ts" setup>
const testClick = () => {
  console.log('点击事件');
};
</script>
