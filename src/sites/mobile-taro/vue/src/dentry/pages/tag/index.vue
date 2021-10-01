<template>
  <view class="demo">
    <miner-cell-group title="基础用法">
      <miner-cell title="primary 类型">
        <template v-slot:link>
          <miner-tag type="primary">标签</miner-tag>
        </template>
      </miner-cell>
      <miner-cell title="success 类型">
        <template v-slot:link>
          <miner-tag type="success">标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="danger 类型">
        <template v-slot:link>
          <miner-tag type="danger">标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="warning 类型">
        <template v-slot:link>
          <miner-tag type="warning">标签</miner-tag>
        </template>
      </miner-cell>
    </miner-cell-group>

    <miner-cell-group title="样式风格">
      <miner-cell title="空心样式">
        <template v-slot:link>
          <miner-tag plain>标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="圆角样式">
        <template v-slot:link>
          <miner-tag round type="primary">标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="标记样式">
        <template v-slot:link>
          <miner-tag mark type="primary">标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="可关闭标签">
        <template v-slot:link>
          <miner-tag v-if="show" closeable @close="close" type="primary"
            >标签</miner-tag
          >
        </template></miner-cell
      >
    </miner-cell-group>

    <miner-cell-group title="自定义">
      <miner-cell title="背景颜色">
        <template v-slot:link>
          <miner-tag color="#FA685D">标签</miner-tag>
        </template></miner-cell
      >
      <miner-cell title="文字颜色">
        <template v-slot:link>
          <miner-tag color="#E9E9E9" textColor="#999999">标签</miner-tag>
        </template>
      </miner-cell>
      <miner-cell title="空心颜色">
        <template v-slot:link>
          <miner-tag color="#FA2400" plain>标签</miner-tag>
        </template>
      </miner-cell>
    </miner-cell-group>
  </view>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      close,
      show
    };
  }
};
</script>

<style lang="scss" scoped>
.miner-tag {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}

.miner-cell {
  align-items: flex-end;
  border-radius: 0;
  .miner-cell__title {
    font-size: 13px;
    font-family: PingFangSC;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
