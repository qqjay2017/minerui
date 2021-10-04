<template>
  <view :class="comClazz">
    <div
      v-for="(i, index) in color"
      :key="index"
      :style="{
        backgroundColor: i,
        width: getItemWidth(index)
      }"
      :class="`${componentName}__item`"
    ></div>
  </view>
</template>

<script lang="ts">
import { computed, PropType } from 'vue';
import { createComponent } from '../../utils/create';
const { create, componentName } = createComponent('countline');
export default create({
  props: {
    count: {
      type: Array as PropType<Array<number>>,
      default: () => [],
      required: true
    },
    color: {
      type: Array,
      default: () => []
    },
    round: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const total = computed(() => {
      if (props.count.length === 0) {
        return 0;
      }
      return props.count.reduce<number>((memo, cur) => {
        if (!cur) {
          memo += 0;
        } else {
          memo += Number(cur);
        }
        return memo;
      }, 0);
    });
    const getItemWidth = (index: number): string => {
      const itemCount = props.count[index];
      if (!itemCount) {
        return '0';
      }
      return ((itemCount / total.value) * 100).toFixed(2) + '%';
    };

    const comClazz = computed(() => {
      return [
        componentName,
        {
          'is-round': props.round,
          'is-reverse': props.reverse
        }
      ];
    });

    // const comItemStyle = computed(() => {
    //   return {
    //     background: props.color,
    //     width: props.width,
    //   };
    // });

    return {
      total,
      componentName,
      getItemWidth,
      comClazz
    };
  }
});
</script>
