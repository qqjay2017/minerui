<template>
  <div class="demo demo-miner-radio">
    <miner-cell-group title="基本用法-左右侧">
      <miner-cell>
        <miner-radiogroup v-model="radioVal" @change="handleChange1">
          <miner-radio :label="1">单选框1</miner-radio>
          <miner-radio :label="2">单选框2</miner-radio>
        </miner-radiogroup>
      </miner-cell>
      <miner-cell>
        <miner-radiogroup
          v-model="radioVal"
          text-position="left"
          @change="handleChange1"
        >
          <miner-radio :label="1">单选框1</miner-radio>
          <miner-radio :label="2">单选框2</miner-radio>
        </miner-radiogroup>
      </miner-cell>
      <miner-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ radioVal }}</div>
      </miner-cell>
    </miner-cell-group>

    <miner-cell-group title="单选框禁用">
      <miner-cell>
        <miner-radiogroup v-model="radioVal3">
          <miner-radio :label="1" disabled>禁用单选框</miner-radio>
          <miner-radio :label="2" disabled>禁用单选框</miner-radio>
        </miner-radiogroup>
      </miner-cell>
    </miner-cell-group>
    <miner-cell-group title="自定义尺寸">
      <miner-cell>
        <miner-radiogroup v-model="radioVal4">
          <miner-radio :label="1" icon-size="12">自定义尺寸12</miner-radio>
          <miner-radio :label="2" icon-size="12">自定义尺寸12</miner-radio>
        </miner-radiogroup>
      </miner-cell>
    </miner-cell-group>
    <miner-cell-group title="Radio自定义图标">
      <miner-cell>
        <miner-radiogroup v-model="radioVal5">
          <miner-radio
            :label="1"
            icon-name="checklist"
            icon-active-name="checklist"
            >自定义图标</miner-radio
          >
          <miner-radio
            :label="2"
            icon-name="checklist"
            icon-active-name="checklist"
            >自定义图标</miner-radio
          >
        </miner-radiogroup>
      </miner-cell>
    </miner-cell-group>
    <miner-cell-group title="触发事件">
      <miner-cell>
        <miner-radiogroup v-model="radioVal6" @change="handleChange3">
          <miner-radio :label="1">触发事件</miner-radio>
          <miner-radio :label="2">触发事件</miner-radio>
        </miner-radiogroup>
      </miner-cell>
      <miner-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ radioVal6 }}</div>
      </miner-cell>
    </miner-cell-group>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const data = reactive({
      radioVal: 1,
      radioVal2: 2,
      radioVal3: 1,
      radioVal4: 1,
      radioVal5: 1,
      radioVal6: 1
    });
    const handleChange1 = (value: any) => {
      console.log(value);
    };
    const handleChange2 = (value: any) => {
      console.log(value);
    };
    const handleChange3 = (value: any) => {
      console.log(`您选中了${value}`);
    };
    return {
      ...toRefs(data),
      handleChange1,
      handleChange2,
      handleChange3
    };
  }
};
</script>

<style lang="scss">
.demo-check {
  margin-right: 10px;
}
.demo-miner-radio {
  .miner-radio {
    margin-bottom: 8px;
  }
}
</style>
