<template>
  <miner-swiper-item>
    <slot></slot>
  </miner-swiper-item>
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { create } = createComponent('tab-panel');

export default create({
  props: {
    tabTitle: {
      type: String,
      default: ''
    }
  },

  setup(props, ctx) {
    //
  }
});
</script>
