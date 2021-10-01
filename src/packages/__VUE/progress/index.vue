<template>
  <div class="miner-progress">
    <div
      class="miner-progress-outer"
      ref="progressOuter"
      :class="[
        showText && !textInside ? 'miner-progress-outer-part' : '',
        size ? 'miner-progress-' + size : ''
      ]"
      :style="{ height: height }"
    >
      <div
        :class="['miner-progress-inner', status == 'active' ? 'miner-active' : '']"
        :style="bgStyle"
      >
        <div
          class="miner-progress-text miner-progress-insidetext"
          :style="{ lineHeight: height, left: left }"
          v-if="showText && textInside"
        >
          <span :style="textStyle">{{ percentage }}%</span>
        </div>
      </div>
    </div>
    <div
      class="miner-progress-text"
      :style="{ lineHeight: height }"
      v-if="showText && !textInside"
    >
      <template v-if="status == 'active' || status == ''">
        <span :style="textStyle">{{ percentage }}%</span>
      </template>
      <template v-else-if="status == 'icon'">
        <miner-icon size="16px" :name="iconName" :color="iconColor"></miner-icon>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  provide,
  reactive,
  nextTick,
  ref,
  watch
} from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('progress');
export default create({
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true
    },
    size: {
      type: String,
      default: 'base'
    },
    status: {
      type: String,
      default: ''
    },
    strokeWidth: {
      type: [Number, String],
      default: ''
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    strokeColor: {
      type: String,
      default: ''
    },
    textColor: {
      tyep: String,
      default: ''
    },
    iconName: {
      type: String,
      default: 'checked'
    },
    iconColor: {
      type: String,
      default: '#439422'
    }
  },
  setup(props, { emit }) {
    const height = ref(props.strokeWidth + 'px');
    const progressOuter = ref();
    const left = ref();
    const bgStyle = computed(() => {
      return {
        width: props.percentage + '%',
        background: props.strokeColor || ''
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ''
      };
    });

    watch(
      () => props.percentage,
      (values) => {
        console.log(
          'progressOuter.value.offsetWidth',
          progressOuter.value.offsetWidth
        );

        console.log('values', values);

        left.value =
          progressOuter.value.offsetWidth * Number(values) * 0.01 - 5 + 'px';
      }
    );
    onMounted(() => {
      left.value =
        progressOuter.value.offsetWidth * Number(props.percentage) * 0.01 -
        5 +
        'px';
    });
    return {
      height,
      bgStyle,
      textStyle,
      progressOuter,
      left
    };
  }
});
</script>
