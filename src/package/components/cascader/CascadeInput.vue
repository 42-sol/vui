<template>
<div class="vui-cascade-input" v-bind='blockStyling' @click='onInputClick'>
  <div class="vui-cascade-input__label">
    <span v-if='inputLabel'>{{ inputLabel }}</span>
    <div v-else class="vui-cascade-input__placeholder">{{ props.placeholder }}</div>
  </div>

  <div
  v-if='props.clearable && props.values.length'
  class="flex-shrink-0 rounded p-1 hover:bg-gray-300"
  @click='onClear'
  >
    <div _i-material-symbols:close></div>
  </div>
</div>

<div class="vui-cascade-input__error" v-if='errorMsg'>{{ errorMsg }}</div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { styling } from '@/package/utils';

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
const blockStyling = computed(() => styling(({ classes }) => {
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
$el: 'vui-cascade-input';

.#{$el} {
  @apply border rounded-xl p-1 overflow-hidden flex items-center justify-between;

  & .#{$el}--disabled {
    @apply bg-gray-300 text-gray-500;
  }
  
  & .#{$el}__label {
    @apply flex-col h-8 overflow-x-auto whitespace-nowrap;
  }

  & .#{$el}__placeholder {
    @apply text-gray-400 h-8 truncate;
  }
  
  & .#{$el}__error {
    color: var(--vui-error-color);
    @apply text-xs whitespace-nowrap truncate;
  }
}

// html.dark {
//   .#{$el} {
//     & .#{$el}--disabled {
//       @apply bg-gray-500 text-gray-500;
//     }

//     & .#{$el}__placeholder {
//       @apply text-gray-400 h-8 truncate;
//     }
//   }
// }
</style>
