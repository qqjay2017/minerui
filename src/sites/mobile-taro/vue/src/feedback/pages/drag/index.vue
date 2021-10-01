<template>
  <div class="demo full dragDe">
    <h2>基础用法</h2>
    <miner-drag class="dragDemo">
      <miner-button type="primary">触摸移动</miner-button>
    </miner-drag>
    <h2>x轴方向移动</h2>
    <miner-drag class="dragDemo" direction="y">
      <miner-button type="primary">Y轴移动</miner-button>
    </miner-drag>
    <h2>y轴方向移动</h2>
    <miner-drag class="dragDemo" direction="x">
      <miner-button type="primary">X轴移动</miner-button>
    </miner-drag>
  </div>
</template>

<script lang="ts">
export default {
  setup() {}
};
</script>

<style lang="scss">
.dragDemo {
  margin-left: 20px;
}
.dragDe {
  height: 667px !important;
}
</style>
