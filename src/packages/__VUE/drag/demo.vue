<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <miner-drag :style="{ top: '120px', left: '8px' }">
      <miner-button type="primary">触摸移动</miner-button>
    </miner-drag>
    <h2 style="top: 30px; position: relative">限制拖拽方向</h2>
    <miner-drag direction="x" :style="{ top: '200px', left: '8px' }">
      <miner-button type="primary">只能X轴拖拽</miner-button>
    </miner-drag>
    <miner-drag direction="y" :style="{ top: '200px', right: '50px' }">
      <miner-button type="primary">只能Y轴拖拽</miner-button>
    </miner-drag>
    <h2 style="top: 60px; position: relative">自动吸边</h2>
    <miner-drag
      direction="x"
      :attract="true"
      :style="{ top: '275px', left: '8px' }"
    >
      <miner-button type="primary">拖动我</miner-button>
    </miner-drag>
    <h2 style="top: 90px; position: relative">限制拖动边界</h2>
    <div class="drag-boundary"></div>
    <miner-drag
      :boundary="{ top: 361, left: 9, bottom: bottom(), right: right() }"
      :style="{ top: '400px', left: '50px' }"
    >
      <miner-button type="primary">限制拖拽边界</miner-button>
    </miner-drag>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('drag');
export default createDemo({
  setup() {
    function right() {
      return document.documentElement.clientWidth - 300 - 9;
    }
    function bottom() {
      return document.documentElement.clientHeight - 559;
    }
    return {
      right,
      bottom
    };
  }
});
</script>

<style lang="scss" scoped>
.drag-boundary {
  position: absolute;
  top: 360px;
  left: 8px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
