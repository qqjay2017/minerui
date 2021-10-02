<template>
  <span ref="elRef" :class="classes" @click="handleClick" :style="getWrapStyle"></span>
</template>

<script lang="ts">
import { ref, computed, unref, nextTick, CSSProperties, onMounted, watch } from 'vue';
import Iconify from '@iconify/iconify';
import { createComponent } from '../../utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';

const SVG_END_WITH_FLAG = '|svg';
const { componentName, create } = createComponent('svgicon');
export default create({
  props: {
    name: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: [String, Number],
      default: 20
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    const elRef = ref<ElRef>(null);
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    const getIconRef = computed(() => `${props.prefix ? props.prefix + ':' : ''}${props.name}`);

    const update = async () => {
      const el = unref(elRef);
      if (!el) return;

      await nextTick();
      const icon = unref(getIconRef);
      if (!icon) return;

      const svg = Iconify.renderSVG(icon, {});

      if (svg) {
        el.textContent = '';
        el.appendChild(svg);
      } else {
        const span = document.createElement('span');
        span.className = 'iconify';
        span.dataset.icon = icon;
        el.textContent = '';
        el.appendChild(span);
      }
    };

    const getWrapStyle = computed((): CSSProperties => {
      return {
        fontSize: pxCheck(props.size),
        color: props.color,
        display: 'inline-flex'
      };
    });
    const handleClick = (e) => {
      ctx.emit('click', e);
    };
    watch(() => props.name, update, { flush: 'post' });
    onMounted(update);

    return {
      classes,
      elRef,
      getWrapStyle,
      handleClick
    };
  }
});
</script>
