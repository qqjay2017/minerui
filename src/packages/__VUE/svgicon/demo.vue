<template>
  <div class="demo">
    <h2>基础用法</h2>
    <miner-cell>
      <miner-svgicon name="ant-design:github-filled"></miner-svgicon>
      <miner-svgicon name="mdi:airplane-takeoff"></miner-svgicon>
    </miner-cell>

    <h2>图标颜色</h2>
    <miner-cell>
      <miner-svgicon name="ant-design:github-filled" color="#fa2c19"></miner-svgicon>
      <miner-svgicon name="mdi:airplane-takeoff" color="#64b578"></miner-svgicon>
    </miner-cell>

    <h2>图标大小</h2>
    <miner-cell>
      <miner-svgicon name="ant-design:github-filled"></miner-svgicon>
      <miner-svgicon name="mdi:airplane-takeoff" size="24"></miner-svgicon>
      <miner-svgicon name="mdi:airplane-takeoff" size="26"></miner-svgicon>
    </miner-cell>
    <h2>图标前缀</h2>
    <miner-cell>
      <miner-svgicon prefix="ant-design" name="github-filled"></miner-svgicon>
      <miner-svgicon prefix="mdi" name="airplane-takeoff" size="24"></miner-svgicon>
    </miner-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';

const { createDemo } = createComponent('icon');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.miner-cell {
  > .miner-svgicon {
    margin-right: 10px;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }

    .miner-svgicon {
      margin: 16px 0 16px;
    }
  }
}
</style>
