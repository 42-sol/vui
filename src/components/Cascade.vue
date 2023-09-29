<template lang="pug">
.v42-cascade.border.w-96.h-96.bg-white.overflow-hidden.overflow-y-auto.select-none(
  v-bind='styling'
)
  .w-full(v-if='props.canBack')
    .h-10.w-10.flex.items-center.justify-center.cursor-pointer(
      class='hover:bg-gray-200'
      @click='emit("on-back")'
    )
      Icon(icon='ep:back')

  CascadeOption(
    v-for='option in cascade.options'
    :key='option.id || option.value'
    :cascade='cascade'
    :option='option'
    @on-click='onOptionClick'
  )

  .absolute.top-0.left-0.w-full.h-full.bg-black.opacity-10(v-if='props.fog')
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import CascadeOption from './CascadeOption.vue';
import { createStyleClasses } from '../utils/createStyleClasses';

// PROPS
const props = defineProps<{
  cascade: CascadeObj
  padding: number
  fog: boolean
  canBack: boolean
}>();
// EMITS
const emit = defineEmits(['on-select', 'on-back']);

/**
 * V-bind class & style to root element
 */
const styling = computed(() => createStyleClasses(({ classes, styles }) => {
  classes.push('absolute top-0');
  styles.left = `${12 * props.padding}px`
}));

/**
 * Emit click on options
 */
function onOptionClick(params: OptionClickEmitOptions) {
  emit('on-select', { cascade: props.cascade, optionParams: params });
}
</script>

<style scoped lang='postcss'>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0 , 255, 0.7);
  border-radius: 12px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}
</style>