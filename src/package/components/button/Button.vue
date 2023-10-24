<script setup lang="ts">
import { styling } from '@/package/main';
import { computed } from 'vue';

type VuiButttonType = 'default' | 'primary' | 'error' | 'warning' | 'success';

const blockName = 'vui-button';

const props = withDefaults(
  defineProps<{
    type?: VuiButttonType
  }>(),
  {
    type: 'default'
  }
);

const buttonStyling = computed(() => styling(({ classes }) => {
  classes.push(blockName, `${blockName}--${props.type}`)
}));
</script>

<template>

<button v-bind='buttonStyling'>
  <slot />
</button>
</template>

<style scoped lang='scss'>
.vui-button {
  @apply border p-1 rounded;

  &--default {
    @apply bg-white;
  }
  &--primary {
    @apply bg-blue-500;
  }
  &--error {
    @apply bg-red-500;
  }
  &--warning {
    @apply bg-yellow-500;
  }
  &--success {
    @apply bg-green-500;
  }
}
</style>