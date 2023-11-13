<template>
  <div v-bind='blockStyling'>
    <input-immitator
    :focused='generalFocus'
    :error='props.error'
    :disabled='props.disabled'
    >
      <template #left></template>
      
      <div class="vui-input__wrapper">
        <input
        ref='inputEl'
        class='vui-input__input'
        :type='props.type'
        :value='props.modelValue'
        :placeholder='props.placeholder'
        :disabled='props.disabled'
        :readonly='props.readonly'
        @input='onInput'
        @focus='onFocus'
        @blur='onBlur'
        >

        <div
        class='vui-input__clear-btn'
        v-if='props.clearable && props.modelValue'
        @click='onClear'
        >
          <i _i-material-symbols:close></i>
        </div>
      </div>

      <template #right></template>
    </input-immitator>
  </div>
</template>

<script setup lang='ts'>
import { Ref, computed, ref } from 'vue';
import InputImmitator from './InputImmitator.vue';
import { styling } from '@/package/utils';

// PROPS
const props = withDefaults(defineProps<{
  modelValue?: number | string,
  type?: 'text',
  clearable?: boolean,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  error?: boolean
}>(), {
  type: 'text',
  clearable: false,
  disabled: false,
  readonly: false,
  error: false
});
// EMITS
const emit = defineEmits(['update:modelValue', 'on-input', 'on-change', 'on-focus', 'on-blur']);

const block = 'vui-input';
const inputEl = ref(null) as Ref<HTMLInputElement | null>;

/**
 * Variable to make focus in inputImmitator
 */
const generalFocus = ref(false);

/**
 * Block styling
 */
const blockStyling = computed(() => styling(({ classes }) => {
  classes.push(block);
  if (props.disabled) classes.push(`${block}--disabled`);
  if (props.readonly) classes.push(`${block}--readonly`);
}));

/**
 * On input event of input-element
 */
function onInput(e: Event) {
  const value = (e.target as HTMLInputElement)?.value;
  setValue(value);
}

/**
 * On clear-btn was clicked
 */
function onClear() {
  setValue('');
}

/**
 * Set new value
 */
function setValue(value: number | string) {
  const wasChanged = value !== props.modelValue;

  emit('update:modelValue', value, props.modelValue);
  emit('on-input', value, props.modelValue);

  if (wasChanged) {
    emit('on-change', value, props.modelValue);
  }
}

/**
 * On the input's got focus
 */
function onFocus() {
  generalFocus.value = true;
  emit('on-focus');
}

/**
 * On the input's lost focus
 */
function onBlur() {
  generalFocus.value = false;
  emit('on-blur');
}

/**
 * Force focus on input
 */
function focus() {
  inputEl.value?.focus();
}

/**
 * Force blur input
 */
function blur() {
  inputEl.value?.blur();
}

defineExpose({
  focus,
  blur
})
</script>

<style scoped lang='scss'>
$el: 'vui-input';

.#{$el} {
  &__wrapper {
    @apply flex p-1 bg-white;
  }

  &__input {
    @apply border-none outline-none w-full;

    &:focus, &:active {
      @apply border-none outline-none;
    }
  }

  &__clear-btn {
    @apply
      flex-shrink-0
      flex
      items-center
      justify-center
      p-1
      rounded-full
      hover:bg-gray-200;
  }

  &--readonly {
    
  }

  &--disabled {
    & .#{$el}__wrapper {
      @apply bg-gray-200 text-gray-500;
    }
  }
}
</style>