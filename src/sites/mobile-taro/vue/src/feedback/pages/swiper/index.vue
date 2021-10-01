<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <miner-swiper autoplay="true" circular="true">
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
      </miner-swiper>
    </view>
    <h2>改变起始位置</h2>
    <view class="demo-box">
      <miner-swiper current="1">
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
      </miner-swiper>
    </view>
    <h2>自定义指示器</h2>
    <view class="demo-box">
      <miner-swiper
        autoplay="true"
        circular="true"
        indicator-dots="true"
        indicator-color="pink"
        indicator-active-color="red"
      >
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current }}/4 </div>
        </template>
      </miner-swiper>
    </view>
    <h2>垂直方向</h2>
    <view class="demo-box">
      <miner-swiper
        vertical="true"
        autoplay="true"
        circular="true"
        indicator-dots="true"
        indicator-color="pink"
        indicator-active-color="red"
      >
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current }}/4 </div>
        </template>
      </miner-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';

export default {
  props: {},
  setup() {
    const state = reactive({
      list: [
        'https://storage.360buyimg.com/jdc-article/MinerUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/MinerUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomeminerui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss">
.demo-box {
  .miner-swiper-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>
