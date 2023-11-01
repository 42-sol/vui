<template>
<div class="vui-cascade" v-bind='cascadeStyling'>
  <div class="vui-cascade__scrollable">
    <div class="vui-cascade__top-space" v-if='props.canBack'>
      <slot name='backBtn' v-bind='{ back }'>
        <div class="vui-cascade__back-btn" @click='back'>
          <i _i-ep:back/>
        </div>
      </slot>

      <div class="flex items-center justify-center w-full">
        <span v-if='cascade.loadStatus === "process"'>Loading...</span>
        <span v-if='cascade.loadStatus === "error"'>Data hasn't been loaded</span>
      </div>
    </div>

    <slot name='beforeOptions' v-bind='{ cascade: props.cascade }'></slot>

    <cascade-option
    v-for='option in cascade.options' :key='option.id || option.value'
    :cascade='cascade'
    :option='option'
    @on-click='onOptionClick'
    ></cascade-option>

    <template v-if='cascade.loadStatus != "process" && !cascade.options.length'>
      <slot name='cascadeNoData' v-bind='{ cascade: props.cascade }'>
        <div class="vui-cascade__no-data">{{ props.noDataText || 'no data' }}</div>
      </slot>
    </template>

    <transition class='vui-cascade__fog-transition'>
      <div class="vui-cascade__fog" v-if='props.fog'></div>
    </transition>
  </div>
</div>
</template>

<script setup lang="ts">
import type { CascadeObj, CascadesConfig, OptionClickEmitOptions } from '@/types.d';

import { computed } from 'vue';
import CascadeOption from './CascadeOption.vue';
import { styling, pixelsFromNumber } from '@/package/utils';

// PROPS
const props = defineProps<{
  cascade: CascadeObj
  padding: number
  fog: boolean
  canBack: boolean,
  configs: CascadesConfig | undefined
  noDataText?: string
}>();
// EMITS
const emit = defineEmits(['on-select', 'on-back']);

/**
 * V-bind class & style to root element
 */
const cascadeStyling = computed(() => styling(({ styles }) => {
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
$el: 'vui-cascade';

.#{$el} {
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

  &__no-data {
    @apply text-center p-2 text-gray-500;
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
