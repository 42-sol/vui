<template lang='pug'>
div
  RenderOption(v-if='props.option.render')
  .vui-cascade-option-title__default-title(v-else) {{ props.option.title }}
</template>

<script setup lang='ts'>
import { CascadeOptionObj } from '@/types';

const props = defineProps<{
  option: CascadeOptionObj
}>()

/**
 * Render option title
 */
 const RenderOption = () => {
  return props.option.render?.();
};
</script>

<style lang='scss'>
.vui-cascade-option-title {
  &__default-title {
    @apply truncate;
  }
}
</style>