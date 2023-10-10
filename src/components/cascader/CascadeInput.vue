<template lang='pug'>
.vui-cascade-input(@click='onInputClick' v-bind='styling') 
  .vui-cascade-input__label
    span(v-if='inputLabel') {{ inputLabel }}
    .vuscade-input__placeholder(v-else) {{ props.placeholder }}

  .flex-shrink-0.rounded.p-1(
    v-if='props.clearable && props.values.length'
    class='hover:bg-gray-300'
    @click='onClear'
  )
    Icon(icon='material-symbols:close')

.vui-cascade-input__error(v-if='errorMsg') {{ errorMsg }}
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { createStyleClasses } from '../main';
import { Icon } from '@iconify/vue';

// PROPS
const props = withDefaults(defineProps<{
  values: string[],
  errorMsg?: string,
  separator?: string
  placeholder?: string,
  disabled?: boolean,
  clearable?: boolean
}>(), {
  separator: '/'
});
// EMITS
const emit = defineEmits(['on-click', 'on-clear']);

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

/**
 * When clear the input field
 */
function onClear() {
  emit('on-clear')
}
</script>

<style scoped lang='scss'>
.vui-cascade-input {
  @apply border rounded-xl p-1 overflow-hidden flex items-center justify-between;

  &--disabled {
    @apply bg-gray-300 text-gray-500;
  }
  
  &__label {
    @apply flex-col h-8 overflow-x-auto whitespace-nowrap;
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
