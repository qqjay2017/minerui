<template>
  <div :class="clazz" :style="comStyle"></div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '../../utils/pxCheck';

const { create, componentName } = createComponent('skeleton');
export default create({
  props: {
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: 16
    },
    width: {
      type: [Number, String],
      default: '100%'
    }
  },
  setup(props) {
    const clazz = computed(() => {
      return [componentName, `${componentName}__${props.type}`, props.active ? 'is-active' : ''];
    });
    const comStyle = computed(() => {
      if (props.type === 'line') {
        return {
          height: pxCheck(props.size),
          width: typeof props.width === 'number' ? pxCheck(props.width) : props.width
        };
      } else if (props.type === 'round') {
        return {
          height: pxCheck(props.size),
          width: pxCheck(props.size)
        };
      }
      return {};
    });

    return {
      clazz,
      comStyle
    };
  }
});
</script>
