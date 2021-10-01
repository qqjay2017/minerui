<template>
  <div class="demo">
    <miner-cell-group title="函数式调用">
      <miner-cell title="基础弹框" @click="baseClick"></miner-cell>
      <miner-cell title="无标题弹框" @click="noTitleClick"></miner-cell>
      <miner-cell title="提示弹框" @click="tipsClick"></miner-cell>
    </miner-cell-group>
    <miner-cell-group title="标签式调用">
      <miner-cell title="组件调用" @click="componentClick"></miner-cell>
      <miner-dialog
        teleport="#app"
        title="组件调用"
        content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
        v-model:visible="visible"
      >
      </miner-dialog>
    </miner-cell-group>
    <miner-cell-group title="teleport 使用，挂载到指定节点">
      <miner-cell title="body 节点下" @click="teleportClick('body')"></miner-cell>
      <miner-cell title="#app 节点下" @click="teleportClick('#app')"></miner-cell>
      <miner-cell
        title="demo class 元素节点下"
        @click="teleportClick('.demo')"
      ></miner-cell>
    </miner-cell-group>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('dialog');
import { Dialog } from '@/packages/minerui.vue';

export default createDemo({
  setup() {
    const visible = ref(false);

    const onCancel = () => {
      console.log('event cancel');
    };
    const onOk = () => {
      console.log('event ok');
    };

    const baseClick = (): void => {
      Dialog({
        title: '基础弹框',
        content: '支持函数调用和组件调用两种方式。',
        onCancel,
        onOk
      });
    };
    const noTitleClick = () => {
      Dialog({
        content: '无标题弹框',
        onCancel,
        onOk
      });
    };
    const tipsClick = () => {
      Dialog({
        title: '温馨提示',
        content: '支持函数调用和组件调用两种方式。',
        noCancelBtn: true,
        onCancel,
        onOk
      });
    };

    const componentClick = () => {
      visible.value = true;
    };

    const teleportClick = (teleport: string) => {
      Dialog({
        teleport,
        title: '挂载至 ' + teleport,
        content: '打开开发者工具看一下 Elements Tab',
        noCancelBtn: true,
        onCancel
      });
    };

    return {
      visible,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick,
      teleportClick
    };
  }
});
</script>
<style lang="scss"></style>
