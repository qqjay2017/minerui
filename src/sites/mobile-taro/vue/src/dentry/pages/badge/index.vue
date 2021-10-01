<template>
  <view class="demo">
    <h2>默认用法</h2>
    <miner-row>
      <miner-badge :value="8">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge :value="76">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge value="NEW">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge dot>
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
    </miner-row>
    <h2>最大值</h2>
    <miner-row>
      <miner-badge :value="200" :max="9">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge :value="200" :max="20">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge :value="200" :max="99">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
    </miner-row>

    <h2>自定义颜色</h2>
    <miner-row>
      <miner-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
    </miner-row>

    <h2>自定义徽标内容</h2>
    <miner-row>
      <miner-badge>
        <template #icons>
          <miner-icon name="Check" color="#ffffff" size="12"></miner-icon>
        </template>
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge>
        <template #icons>
          <miner-icon name="link" color="#ffffff" size="12"></miner-icon>
        </template>
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge>
        <template #icons>
          <miner-icon name="download" color="#ffffff" size="12"></miner-icon>
        </template>
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
    </miner-row>

    <h2>自定义位置</h2>
    <miner-row>
      <miner-badge :value="8" top="5" right="5">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge :value="76" top="10" right="10">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
      <miner-badge value="NEW">
        <miner-avatar icon="my" shape="square"></miner-avatar>
      </miner-badge>
    </miner-row>

    <h2>独立展示</h2>
    <miner-row>
      <miner-badge :value="8"> </miner-badge>
      <miner-badge :value="76"> </miner-badge>
      <miner-badge value="NEW"> </miner-badge>
    </miner-row>
  </view>
</template>
<script lang="ts">
export default {
  setup() {}
};
</script>

<style lang="scss">
.miner-badge {
  margin-right: 40px;
}
</style>
