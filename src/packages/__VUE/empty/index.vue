<template>
  <div :class="componentName">
    <div :class="`${componentName}__card`">
      <div :class="`${componentName}__body`">
        <component :is="comSvg" :class="`${componentName}__svg`" />
        <h1 class="m-empty__maint">{{ emptyTitle }}</h1>
        <p class="m-empty__subt">{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('empty');
import TrendSvg from './trend.svg';
import NodataSvg from './nodata.svg';
import EmptySvg from './empty.svg';
import { useLocaleInject } from '../../utils/useLocale';
export default create({
  props: {
    mainTitle: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'trend'
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { t } = useLocaleInject();
    const emptyTitle = computed(() => props.mainTitle || t('message.empty.mainTitle'));
    const comSvg = computed(() => {
      if (props.theme === 'trend') {
        return TrendSvg;
      } else if (props.theme === 'empty') {
        return EmptySvg;
      } else if (props.theme === 'nodata') {
        return NodataSvg;
      }
      return TrendSvg;
    });
    return {
      componentName,
      comSvg,
      emptyTitle
    };
  }
});
</script>
