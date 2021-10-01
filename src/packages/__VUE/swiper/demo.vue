<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <miner-swiper
        :init-page="page"
        :pagination-visible="true"
        pagination-color="#426543"
        auto-play="2000"
      >
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
      </miner-swiper>
    </view>
    <h2>自定义大小</h2>
    <view class="demo-box">
      <miner-swiper :init-page="page2" :loop="false" width="300">
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
      </miner-swiper>
    </view>
    <h2>自定义指示器</h2>
    <view class="demo-box">
      <miner-swiper :init-page="page3" :loop="true" @change="change">
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
        :init-page="page4"
        :loop="true"
        auto-play="3000"
        direction="vertical"
        height="150"
        :pagination-visible="true"
        style="height: 150px"
      >
        <miner-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </miner-swiper-item>
      </miner-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('swiper');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      page: 2,
      page2: 0,
      page3: 0,
      page4: 0,
      current: 1,
      list: [
        'https://storage.360buyimg.com/jdc-article/MinerUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/MinerUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomeminerui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
    });
    const change = (index: number) => {
      state.current = index + 1;
    };
    return {
      ...toRefs(state),
      change
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
  .miner-swiper-item {
    line-height: 150px;
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
