<template lang='pug'>
.vui-cascade-input(@click='onInputClick' v-bind='styling') 
  .vui-cascade-input__label(v-if='inputLabel') {{ inputLabel }}
  .vui-cascade-input__placeholder(v-else) {{ props.placeholder }}
  .vui-cascade-input__error(v-if='errorMsg') {{ errorMsg }}
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { createStyleClasses } from '../main';

// PROPS
const props = withDefaults(defineProps<{
  values: string[],
  errorMsg?: string,
  separator?: string
  placeholder?: string,
  disabled?: boolean
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
 * v-bind class & style for root el
 */
const styling = computed(() => createStyleClasses(({ classes }) => {
  if (props.disabled) classes.push('vui-cascade-input--disabled')
}));

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

  &--disabled {
    @apply bg-gray-300 text-gray-500;
  }
  
  &__label {
    @apply flex items-center h-8 overflow-x-auto whitespace-nowrap;
  }

  &__placeholder {
    @apply text-gray-400 h-8 truncate;
  }
  
  &__error {
    color: var(--vui-error-color);
    @apply text-xs whitespace-nowrap truncate;
  }
}
</style>
