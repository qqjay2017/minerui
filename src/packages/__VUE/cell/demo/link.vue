<template>
  <div class="demo-space">
    <miner-cell-group title="自定义右侧箭头区域">
      <miner-cell title="Switch">
        <template v-slot:link>
          <miner-switch v-model="switchChecked" />
        </template>
      </miner-cell>
    </miner-cell-group>
  </div>
</template>

<script lang="ts" setup>
const testClick = () => {
  console.log('点击事件');
};
</script>
