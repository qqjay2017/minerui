<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <miner-swipe>
      <miner-cell round-radius="0" desc="左滑删除" />
      <template #right>
        <miner-button shape="square" style="height: 100%" type="danger"
          >删除</miner-button
        >
      </template>
    </miner-swipe>
    <h2>禁止滑动</h2>
    <miner-swipe disabled>
      <miner-cell round-radius="0" desc="禁止滑动" />
      <template #right>
        <miner-button shape="square" style="height: 100%" type="danger"
          >删除</miner-button
        >
      </template>
    </miner-swipe>
    <h2>左右滑动</h2>
    <miner-swipe>
      <template #left>
        <miner-button shape="square" style="height: 100%" type="success"
          >选择</miner-button
        >
      </template>
      <miner-cell round-radius="0" desc="左滑右滑都可以哦" />
      <template #right>
        <miner-button shape="square" style="height: 100%" type="danger"
          >删除</miner-button
        >
        <miner-button shape="square" style="height: 100%" type="info"
          >收藏</miner-button
        >
      </template>
    </miner-swipe>
    <h2>异步控制</h2>
    <miner-swipe ref="refSwipe" @open="open" @close="close">
      <miner-cell title="异步打开关闭">
        <template v-slot:link>
          <miner-switch
            v-model="checked"
            @change="changSwitch"
            active-text="开"
            inactive-text="关"
          />
        </template>
      </miner-cell>
      <template #right>
        <miner-button shape="square" style="height: 100%" type="danger"
          >删除</miner-button
        >
      </template>
    </miner-swipe>
    <h2>自定义</h2>
    <miner-swipe>
      <template #left>
        <miner-button shape="square" style="height: 100%" type="success"
          >选择</miner-button
        >
      </template>
      <miner-cell title="商品描述">
        <template v-slot:link>
          <miner-inputnumber v-model="number" />
        </template>
      </miner-cell>
      <template #right>
        <miner-button shape="square" style="height: 100%" type="danger"
          >删除</miner-button
        >
        <miner-button shape="square" style="height: 100%" type="info"
          >收藏</miner-button
        >
      </template>
    </miner-swipe>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const refSwipe = ref<HTMLElement>();
    const checked = ref(false);
    const number = ref(0);
    const changSwitch = (value: boolean) => {
      if (value) {
        refSwipe.value?.open('left');
      } else {
        refSwipe.value?.close();
      }
    };
    const open = (obj: any) => {
      console.log(obj);
      checked.value = true;
    };
    const close = () => {
      checked.value = false;
    };
    return { checked, number, changSwitch, refSwipe, open, close };
  }
};
</script>

<style lang="scss" scoped></style>
