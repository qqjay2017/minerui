<template>
  <div class="demo">
    <h2>基础用法</h2>
    <miner-cell
      title="展示弹出层"
      is-link
      @click="state.showBasic = true"
    ></miner-cell>
    <miner-popup
      pop-class="popclass"
      :style="{ padding: '30px 50px' }"
      v-model:visible="state.showBasic"
      :z-index="100"
      >正文</miner-popup
    >
    <h2>弹出位置</h2>
    <miner-cell title="顶部弹出" is-link @click="state.showTop = true"></miner-cell>
    <miner-popup
      position="top"
      :style="{ height: '20%' }"
      v-model:visible="state.showTop"
    ></miner-popup>
    <miner-cell
      title="底部弹出"
      is-link
      @click="state.showBottom = true"
    ></miner-cell>
    <miner-popup
      position="bottom"
      :style="{ height: '20%' }"
      v-model:visible="state.showBottom"
    ></miner-popup>
    <miner-cell
      title="左侧弹出"
      is-link
      @click="state.showLeft = true"
    ></miner-cell>
    <miner-popup
      position="left"
      :style="{ width: '20%', height: '100%' }"
      v-model:visible="state.showLeft"
    ></miner-popup>
    <miner-cell
      title="右侧弹出"
      is-link
      @click="state.showRight = true"
    ></miner-cell>
    <miner-popup
      position="right"
      :style="{ width: '20%', height: '100%' }"
      v-model:visible="state.showRight"
    ></miner-popup>
    <h2>关闭图标</h2>
    <miner-cell
      title="关闭图标"
      is-link
      @click="state.showIcon = true"
    ></miner-cell>
    <miner-popup
      position="bottom"
      closeable
      :style="{ height: '20%' }"
      v-model:visible="state.showIcon"
    ></miner-popup>
    <miner-cell
      title="图标位置"
      is-link
      @click="state.showIconPosition = true"
    ></miner-cell>
    <miner-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '20%' }"
      v-model:visible="state.showIconPosition"
    ></miner-popup>
    <miner-cell
      title="自定义图标"
      is-link
      @click="state.showCloseIcon = true"
    ></miner-cell>
    <miner-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      close-icon="heart"
      :style="{ height: '20%' }"
      v-model:visible="state.showCloseIcon"
    ></miner-popup>
    <h2>圆角弹框</h2>
    <miner-cell
      title="圆角弹框"
      is-link
      @click="state.showRound = true"
    ></miner-cell>
    <miner-popup
      position="bottom"
      closeable
      round
      :style="{ height: '30%' }"
      v-model:visible="state.showRound"
    ></miner-popup>
    <h2>指定挂载节点</h2>
    <miner-cell
      title="指定挂载节点"
      is-link
      @click="state.showTeleport = true"
    ></miner-cell>
    <miner-popup
      :style="{ padding: '30px 50px' }"
      teleport="#app"
      v-model:visible="state.showTeleport"
      >app</miner-popup
    >
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('popup');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showIcon: false,
      showIconPosition: false,
      showCloseIcon: false,
      showRound: false,
      showCombination: false
    });
    return { state };
  }
});
</script>

<style lang="scss" scoped></style>
