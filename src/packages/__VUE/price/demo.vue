<template>
  <div class="demo">
    <h2>基本用法</h2>
    <miner-cell>
      <miner-price :price="0" :need-symbol="false" :thousands="true" />
    </miner-cell>
    <h2>有人民币符号，无千位分隔</h2>
    <miner-cell>
      <miner-price :price="10010.01" :need-symbol="true" :thousands="false" />
    </miner-cell>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <miner-cell>
      <miner-price
        :price="15213.1221"
        :decimal-digits="3"
        :need-symbol="true"
        :thousands="true"
      />
    </miner-cell>
    <h2>异步随机变更</h2>
    <miner-cell>
      <miner-price
        :price="price"
        :decimal-digits="3"
        :need-symbol="true"
        :thousands="true"
      />
    </miner-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import { ref } from 'vue';
const { createDemo } = createComponent('price');
export default createDemo({
  setup() {
    const price = ref(0);
    setInterval(() => {
      price.value = Math.random() * 10000000;
    }, 1000);
    return {
      price
    };
  }
});
</script>

<style lang="scss" scoped></style>
