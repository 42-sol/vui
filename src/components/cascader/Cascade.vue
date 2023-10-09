<template lang="pug">
.vui-cascade(v-bind='styling')
  .vui-cascade__scrollable
    .vui-cascade__top-space(v-if='props.canBack')
      .vui-cascade__back-btn(@click='back')
        slot(name='backBtn' v-bind='{ back }')
          Icon(icon='ep:back')

    CascadeOption(
      v-for='option in cascade.options' :key='option.id || option.value'
      :cascade='cascade'
      :option='option'
      @on-click='onOptionClick'
    )

    Transition(class='vui-cascade__fog-transition')
      .vui-cascade__fog(v-if='props.fog')
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import CascadeOption from './CascadeOption.vue';
import { createStyleClasses, pixelsFromNumber } from '@/utils/createStyleClasses';
import type { CascadeObj, CascadesConfig, OptionClickEmitOptions } from '@/types.d';

// PROPS
const props = defineProps<{
  cascade: CascadeObj
  padding: number
  fog: boolean
  canBack: boolean,
  configs: CascadesConfig | undefined
}>();
// EMITS
const emit = defineEmits(['on-select', 'on-back']);

/**
 * V-bind class & style to root element
 */
const styling = computed(() => createStyleClasses(({ styles }) => {
  styles.width = pixelsFromNumber(props.configs?.width || '240px');

  if (props.configs?.maxHeight) styles.maxHeight = pixelsFromNumber(props.configs.maxHeight);
  else styles.height = pixelsFromNumber(props.configs?.height || '120px');

  styles.left = `${12 * props.padding}px`;
}));

/**
 * Emit click on options
 */
function onOptionClick(params: OptionClickEmitOptions) {
  if (!props.fog) emit('on-select', { cascade: props.cascade, optionParams: params });
}

/**
 * Call one cascade back
 */
function back() {
  emit("on-back");
}
</script>

<style scoped lang='scss'>
.vui-cascade {
  @apply border bg-white overflow-hidden overflow-y-auto select-none absolute top-0;

  &__scrollable {
    @apply relative;
  }

  &__top-space {
    @apply w-full;
  }

  &__back-btn {
    @apply h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-200;
  }

  &__fog {
    background-color: var(--vui-fog);
    @apply absolute top-0 left-0 w-full h-full;

    &-transition {
      &-enter-from,
      &-leave-to {
        @apply opacity-0;
      }
      &-enter-active,
      &-leave-active {
        @apply transition-all;
      }
      &-enter-to,
      &-leave-from {
        @apply opacity-100;
      }
    }
  }
}
</style>
