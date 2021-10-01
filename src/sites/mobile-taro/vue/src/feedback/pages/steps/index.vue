<template>
  <div class="demo padding">
    <h2>基本用法</h2>
    <div class="steps-wrapper">
      <miner-steps :current="current1">
        <miner-step title="步骤一">1</miner-step>
        <miner-step title="步骤二">2</miner-step>
        <miner-step title="步骤三">3</miner-step>
      </miner-steps>
      <div class="steps-button">
        <miner-button type="danger" @click="handleStep('current1')"
          >下一步</miner-button
        >
      </div>
    </div>
    <h2>标题和描述信息</h2>
    <div class="steps-wrapper">
      <miner-steps :current="current2">
        <miner-step title="步骤一" content="步骤描述">1</miner-step>
        <miner-step title="步骤二" content="步骤描述"></miner-step>
        <miner-step title="步骤三" content="步骤描述"></miner-step>
      </miner-steps>
      <div class="steps-button" style="margin-top: 10px">
        <miner-button type="danger" @click="handleStep('current2')"
          >下一步</miner-button
        >
      </div>
    </div>
    <h2>自定义图标</h2>
    <div class="steps-wrapper">
      <miner-steps current="1">
        <miner-step title="已完成" icon="service">1</miner-step>
        <miner-step title="进行中" icon="people">2</miner-step>
        <miner-step title="未开始" icon="location2">3</miner-step>
      </miner-steps>
    </div>
    <h2>竖向步骤条</h2>
    <div class="steps-wrapper" style="height: 300px; padding: 15px 30px">
      <miner-steps direction="vertical" current="2">
        <miner-step title="已完成" content="您的订单已经打包完成，商品已发出"
          >1</miner-step
        >
        <miner-step title="进行中" content="您的订单正在配送途中">2</miner-step>
        <miner-step
          title="未开始"
          content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          >3</miner-step
        >
      </miner-steps>
    </div>
    <h2>竖向步骤条</h2>
    <div class="steps-wrapper" style="height: 300px; padding: 15px 40px">
      <miner-steps direction="vertical" progress-dot current="2">
        <miner-step title="已完成" content="您的订单已经打包完成，商品已发出"
          >1</miner-step
        >
        <miner-step title="进行中" content="您的订单正在配送途中">2</miner-step>
        <miner-step
          title="未开始"
          content="<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"
          >3</miner-step
        >
      </miner-steps>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1
    });

    const handleStep = (params) => {
      if (state[params] >= 3) {
        state[params] = 1;
      } else {
        state[params] += 1;
      }
    };

    return {
      ...toRefs(state),
      handleStep
    };
  }
};
</script>

<style lang="scss">
.padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
  h2 {
    padding-left: 27px !important;
  }
}
.steps-wrapper {
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
  .steps-button {
    text-align: center;
  }
}
</style>
