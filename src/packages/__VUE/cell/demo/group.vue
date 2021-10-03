<template>
  <div class="demo-space">
    <miner-cell-group title="链接 | 分组用法">
      <miner-cell title="链接" is-link></miner-cell>
      <miner-cell title="URL 跳转" desc="https://jd.com" is-link url="https://jd.com"></miner-cell>
      <miner-cell title="路由跳转" to="/"></miner-cell>
    </miner-cell-group>
  </div>
</template>

<script lang="ts" setup>
const testClick = () => {
  console.log('点击事件');
};
</script>
