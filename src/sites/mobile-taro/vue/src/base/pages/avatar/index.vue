<template>
  <div class="demo full">
    <h2>默认用法 (内置"small","normal","large"三种尺寸规格)</h2>
    <miner-cell>
      <miner-avatar
        size="large"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </miner-avatar>
      <miner-avatar
        size="normal"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </miner-avatar>
      <miner-avatar
        size="small"
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      >
      </miner-avatar>
    </miner-cell>
    <h2>修改形状</h2>
    <miner-cell>
      <miner-avatar icon="my" shape="square"></miner-avatar>
      <miner-avatar icon="my" shape="round"></miner-avatar>
    </miner-cell>
    <h2>修改背景色</h2>
    <miner-cell>
      <miner-avatar class="demo-avatar" icon="my" bg-color="#FA2C19"></miner-avatar>
    </miner-cell>
    <h2>修改背景图片</h2>
    <miner-cell>
      <miner-avatar
        icon="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      >
      </miner-avatar>
    </miner-cell>
    <h2>可以修改头像的内容</h2>
    <miner-cell>
      <miner-avatar>N</miner-avatar>
    </miner-cell>
    <h2>点击头像触发事件</h2>
    <miner-cell>
      <miner-avatar icon="my" @active-avatar="handleClick"></miner-avatar>
    </miner-cell>
  </div>
</template>
<script lang="ts">
export default {
  props: {},
  setup() {
    const handleClick = () => {
      console.log('触发点击头像');
    };
    return { handleClick };
  }
};
</script>
<style lang="scss">
.miner-cell {
  align-items: flex-end;
  border-radius: 0;
}
.demo-avatar {
  color: #fff;
}
</style>
