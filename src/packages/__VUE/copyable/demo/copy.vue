<template>
  <miner-copyable showText="展示的字符串" copyText="复制的字符串" @copy="handleCopy" />
</template>

<script lang="ts" setup>
const handleCopy = (flag: boolean) => {
  alert(flag ? '复制成功' : '复制失败');
};
</script>
