<template>
<div class='vui-cascade-option-title'>
  <render-option></render-option>
  <div class="vui-cascade-option-title__default-title">{{ props.option.title }}</div>
</div>
</template>

<script setup lang='ts'>
import type { CascadeOptionObj } from '@/types';

const props = defineProps<{
  option: CascadeOptionObj
}>();

/**
 * Render option title
 */
const RenderOption = () => {
  return props.option.render?.();
};
</script>

<style scoped lang='scss'>
$el: 'vui-cascade-option-title';

.#{$el} {
  & .#{$el}__default-title {
    @apply truncate;
  }
}
</style>