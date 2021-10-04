<template>
  <view :class="componentName" @click="handleCopy">
    <span :class="`${componentName}__text`">
      {{ showText || copyText }}
    </span>
    <MinerSvgIcon :class="`${componentName}__icon`" color="#95a9c9" size="16" name="ant-design:copy-outlined" />
  </view>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import copy from '../../utils/copy-to-clipboard';
import MinerSvgIcon from '../svgicon/index.vue';

const { componentName, create } = createComponent('copyable');

export default create({
  components: {
    MinerSvgIcon
  },
  props: {
    showText: {
      type: String
    },
    copyText: {
      type: String
    }
  },
  emits: {
    copy: (flag: boolean) => true
  },
  setup(props, { emit }) {
    const handleCopy = () => {
      const flag = copy(props.copyText || props.showText);
      emit('copy', flag);
    };

    return {
      componentName,
      handleCopy
    };
  }
});
</script>
