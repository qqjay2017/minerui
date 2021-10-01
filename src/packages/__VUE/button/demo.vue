<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="demo-button-row">
      <miner-button type="primary">主要按钮</miner-button>
      <miner-button type="info">信息按钮</miner-button>
      <miner-button type="default">默认按钮</miner-button>
    </div>
    <div class="demo-button-row2">
      <miner-button type="danger">危险按钮</miner-button>
      <miner-button type="warning">警告按钮</miner-button>
      <miner-button type="success">成功按钮</miner-button>
    </div>
    <h2>朴素按钮</h2>
    <div class="demo-button-row2">
      <miner-button plain type="primary">朴素按钮</miner-button>
      <miner-button plain type="info">朴素按钮</miner-button>
    </div>
    <h2>禁用状态</h2>
    <div class="demo-button-row2">
      <miner-button disabled type="primary">禁用状态</miner-button>
      <miner-button plain disabled type="info">禁用状态</miner-button>
      <miner-button plain disabled type="primary">禁用状态</miner-button>
    </div>
    <h2>按钮形状</h2>
    <div class="demo-button-row2">
      <miner-button shape="square" type="primary">方形按钮</miner-button>
      <miner-button type="info">圆形按钮</miner-button>
    </div>
    <h2>加载状态</h2>
    <div class="demo-button-row2">
      <miner-button loading type="info"></miner-button>
      <miner-button loading type="warning">加载中...</miner-button>
      <miner-button :loading="isLoading" type="success" @click="changeLoading"
        >Click me!</miner-button
      >
    </div>
    <h2>图标按钮</h2>
    <div class="demo-button-row2">
      <miner-button
        shape="square"
        plain
        type="primary"
        icon="star-fill"
      ></miner-button>
      <miner-button shape="square" type="primary" icon="star">收藏</miner-button>
    </div>

    <h2>按钮尺寸</h2>
    <div class="demo-button-row2">
      <miner-button size="large" type="primary" style="margin-bottom: 10px"
        >大号按钮</miner-button
      >
      <miner-button type="primary">普通按钮</miner-button>
      <miner-button size="small" type="primary">小型按钮</miner-button>
    </div>
    <h2>块级元素</h2>
    <div class="demo-button-row2">
      <miner-button block type="primary">块级元素</miner-button>
    </div>
    <h2>自定义颜色</h2>
    <div class="demo-button-row2">
      <miner-button color="#7232dd">单色按钮</miner-button>
      <miner-button color="#7232dd" plain>单色按钮</miner-button>
      <miner-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变按钮
      </miner-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
  props: {},
  setup(props) {
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.miner-button {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
