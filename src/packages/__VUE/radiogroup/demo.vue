<template>
  <div class="demo">
    <h2>基础用法</h2>
    <miner-cell>
      <miner-temp name="wifi"></miner-temp>
      <miner-temp name="mail" txt="test txt"></miner-temp>
    </miner-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('radiogroup');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.miner-temp {
}
</style>
