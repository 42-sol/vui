<template>
  <div class="input-immitator" v-bind='blockStyling'>
    <slot name='left' />

    <div class="input-immitator__wrapper">
      <slot />
    </div>
    <slot name='right' />
  </div>
</template>

<script setup lang='ts'>
import { styling } from '@/package/utils';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  focused?: boolean,
  error?: boolean,
  disabled?: boolean
}>(), {
  focused: false,
  error: false,
  disabled: false
});

const blockStyling = computed(() => styling(({ classes }) => {
  if (props.focused) classes.push('input-immitator--focused');
  if (props.error) classes.push('input-immitator--error');
  if (props.disabled) classes.push('input-immitator--disabled');
}));
</script>

<style scoped lang='scss'>
$el: 'input-immitator';

.#{$el} {
  @apply flex items-center justify-between;

  &__wrapper {
    @apply border rounded overflow-hidden w-full transition-all;
  }

  &--focused {
    & .#{$el}__wrapper {
      @apply border-blue-500;
    }
  }

  &--disabled {
    & .#{$el}__wrapper {
      @apply border-gray-500;
    }
  }

  &--error {
    & .#{$el}__wrapper {
      @apply border-red-500;
    }
  }
}
</style>