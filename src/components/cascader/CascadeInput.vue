<template lang='pug'>
.vui-cascade-input(@click='onInputClick') 
  .vui-cascade-input__label {{ inputLabel }}
  .vui-cascade-input__error(v-if='errorMsg') {{ errorMsg }}
</template>

<script setup lang='ts'>
import { computed } from 'vue';

// PROPS
const props = withDefaults(defineProps<{
  values: string[],
  errorMsg?: string,
  separator?: string
}>(), {
  separator: '/'
});
// EMITS
const emit = defineEmits(['on-click']);

/**
 * Displayed value
 */
const inputLabel = computed(() => {
  return props.values.join(props.separator)
});

/**
 * On input click
 */
function onInputClick() {
  emit('on-click');
}
</script>

<style scoped lang='scss'>
.vui-cascade-input {
  @apply border rounded-xl p-1 overflow-hidden;
  
  &__label {
    @apply flex items-center h-8 overflow-x-auto whitespace-nowrap;
  }
  
  &__error {
    color: var(--vui-error-color);
    @apply text-xs whitespace-nowrap truncate;
  }
}
</style>
