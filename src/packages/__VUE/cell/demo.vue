<template>
  <div class="demo">
    <h2>基本用法</h2>
    <miner-cell title="我是标题" desc="描述文字"></miner-cell>
    <miner-cell
      title="我是标题"
      sub-title="副标题描述"
      desc="描述文字"
    ></miner-cell>
    <miner-cell title="点击测试" @click="testClick"></miner-cell>
    <miner-cell title="圆角设置 0" round-radius="0"></miner-cell>

    <h2>直接使用插槽(slot)</h2>

    <miner-cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </miner-cell>

    <miner-cell-group title="链接 | 分组用法">
      <miner-cell title="链接" is-link></miner-cell>
      <miner-cell
        title="URL 跳转"
        desc="https://jd.com"
        is-link
        url="https://jd.com"
      ></miner-cell>
      <miner-cell title="路由跳转 ’/‘ " to="/"></miner-cell>
    </miner-cell-group>

    <miner-cell-group title="自定义右侧箭头区域">
      <miner-cell title="Switch">
        <template v-slot:link>
          <miner-switch v-model="switchChecked" />
        </template>
      </miner-cell>
    </miner-cell-group>

    <miner-cell-group title="自定义左侧 Icon 区域">
      <miner-cell title="图片">
        <template v-slot:icon>
          <img
            class="miner-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </template>
      </miner-cell>
    </miner-cell-group>

    <h2>展示图标</h2>
    <miner-cell title="姓名" icon="my" desc="张三" isLink> </miner-cell>
    <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
    <miner-cell desc-text-align="left" desc="张三"></miner-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('cell');
export default createDemo({
  setup() {
    const testClick = (event: Event) => {
      console.log('点击事件');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked };
  }
});
</script>

<style lang="scss" scoped></style>
