<template>
  <div class="demo">
    <h2>基础用法</h2>
    <miner-cell>
      <miner-divider />
    </miner-cell>
    <h2>展示文本</h2>
    <miner-cell>
      <miner-divider>文本</miner-divider>
    </miner-cell>
    <h2>内容位置</h2>
    <miner-cell>
      <miner-divider content-position="left">文本</miner-divider>
    </miner-cell>
    <miner-cell>
      <miner-divider content-position="right">文本</miner-divider>
    </miner-cell>
    <h2>虚线</h2>
    <miner-cell>
      <miner-divider dashed>文本</miner-divider>
    </miner-cell>
    <h2>自定义样式</h2>
    <miner-cell>
      <miner-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >文本</miner-divider
      >
    </miner-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('divider');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>
