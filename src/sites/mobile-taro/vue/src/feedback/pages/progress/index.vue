<template>
  <div class="demo full">
    <h2>基本用法</h2>
    <div>
      <miner-cell>
        <miner-progress percentage="30" />
      </miner-cell>
    </div>

    <h2>线形进度条-设置颜色高度</h2>
    <div>
      <miner-cell>
        <miner-progress
          percentage="30"
          stroke-color=" rgba(250,44,25,0.47)"
          stroke-width="20"
          text-color="red"
        />
      </miner-cell>
    </div>
    <h2>线形进度条-百分比不显示</h2>
    <div>
      <miner-cell>
        <miner-progress percentage="50" :show-text="false" stroke-height="24" />
      </miner-cell>
    </div>
    <h2>线形进度条-百分比外显</h2>
    <div>
      <miner-cell>
        <miner-progress percentage="30" />
      </miner-cell>
    </div>
    <h2>线形进度条-百分比内显</h2>
    <div>
      <miner-cell>
        <miner-progress percentage="60" :text-inside="true" />
      </miner-cell>
    </div>
    <h2>线形进度条-自定义尺寸(内置"small","base","large"三种规格)</h2>
    <div>
      <miner-cell>
        <miner-progress percentage="30" size="small"> </miner-progress>
      </miner-cell>
      <miner-cell>
        <miner-progress percentage="50" :text-inside="true" size="base">
        </miner-progress>
      </miner-cell>
      <miner-cell>
        <miner-progress percentage="70" size="large"> </miner-progress>
      </miner-cell>
    </div>
    <h2>线形进度条-状态显示</h2>
    <div>
      <miner-cell>
        <miner-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </miner-cell>
      <miner-cell>
        <miner-progress
          percentage="50"
          :stroke-width="strokeWidth"
          status="wrong"
        />
      </miner-cell>
      <miner-cell>
        <miner-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="success"
          icon-name="issue"
          icon-color="red"
        />
      </miner-cell>
    </div>
    <h2>设置百分比</h2>
    <div>
      <miner-cell>
        <miner-progress :percentage="val" />
      </miner-cell>
      <miner-cell>
        <miner-button type="default" @click="setReduceVal">减少</miner-button>
        <miner-button type="danger" @click="setAddVal">增加</miner-button>
      </miner-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const val = ref(0);
    const setAddVal = () => {
      if (val.value >= 100) {
        return false;
      }
      val.value += 10;
    };
    const setReduceVal = () => {
      if (val.value <= 0) {
        return false;
      }
      val.value -= 10;
    };
    return {
      val,
      setAddVal,
      setReduceVal
    };
  }
};
</script>

<style lang="scss">
.miner-button {
  margin-right: 10px;
}
</style>
