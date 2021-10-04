<template>
  <slot></slot>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';

const { create } = createComponent('config');
import { useLocaleProps, useLocale } from '../../utils/useLocale';

export default create({
  props: {
    ...useLocaleProps
    // Add more configs
  },

  setup(_, { slots }) {
    useLocale();

    return {};
  }
});
</script>
