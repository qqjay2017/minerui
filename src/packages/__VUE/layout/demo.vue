<template>
  <div class="demo full">
    <h2>基础布局</h2>
    <div class="box-item">
      <miner-row>
        <miner-col :span="24">
          <div class="flex-content">span:24</div>
        </miner-col>
      </miner-row>
      <miner-row>
        <miner-col :span="12">
          <div class="flex-content">span:12</div>
        </miner-col>
        <miner-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </miner-col>
      </miner-row>
      <miner-row>
        <miner-col :span="8">
          <div class="flex-content">span:8</div>
        </miner-col>
        <miner-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </miner-col>
        <miner-col :span="8">
          <div class="flex-content">span:8</div>
        </miner-col>
      </miner-row>
      <miner-row>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
    </div>
    <h2>分栏间隔</h2>
    <div class="box-item">
      <miner-row :gutter="10">
        <miner-col :span="8">
          <div class="flex-content">span:8</div>
        </miner-col>
        <miner-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </miner-col>
        <miner-col :span="8">
          <div class="flex-content">span:8</div>
        </miner-col>
      </miner-row>
    </div>
    <h2>Flex布局</h2>
    <div class="box-item">
      <miner-row type="flex" wrap="nowrap">
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
      <miner-row type="flex" justify="center">
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
      <miner-row type="flex" justify="end">
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
      <miner-row type="flex" justify="space-between">
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
      <miner-row type="flex" justify="space-around">
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </miner-col>
        <miner-col :span="6">
          <div class="flex-content">span:6</div>
        </miner-col>
      </miner-row>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('layout');
import Row from '../row/index.vue';
import Col from '../col/index.vue';
export default createDemo({
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
});
</script>

<style lang="scss" scoped>
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 0;
}
.demo .miner-row {
  overflow: hidden;
  &:not(:last-child) .miner-col {
    margin-bottom: 15px;
  }
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
