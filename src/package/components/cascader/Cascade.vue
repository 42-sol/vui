<template>
<div class="vui-cascade" v-bind='cascadeStyling'>
  <div class="vui-cascade__scrollable">
    <div class="vui-cascade__top-space">
      <slot name='backBtn' v-bind='{ back }'>
        <div class="vui-cascade__back-btn" v-if='props.canBack' @click='back'>
          <i _i-ep:back/>
        </div>
      </slot>

      <div
      class="vui-cascade__sort-btn"
      :class='sort ? "vui-cascade__sort-btn--selected" : ""'
      v-if='props.sortable'
      @click='changeSort'
      >
        <i :class='sort === "desc" ? "i-ri:sort-desc" : "i-ri:sort-asc"'/>
      </div>

      <vui-input
      class='w-full'
      v-if='props.filterable'
      v-model='filter'
      clearable
      />
    </div>

    <div class="flex items-center justify-center w-full">
      <span v-if='cascade.loadStatus === "process"'>Loading...</span>
      <span v-if='cascade.loadStatus === "error"'>Data hasn't been loaded</span>
    </div>

    <slot name='beforeOptions' v-bind='{ cascade: props.cascade }'></slot>

    <cascade-option
    v-for='option in optionsList' :key='option.id || option.value'
    :cascade='cascade'
    :option='option'
    @on-click='onOptionClick'
    ></cascade-option>

    <slot name='cascadeNoData' v-bind='{ cascade: props.cascade }'>
      <div
      v-if='!cascade.options.length'
      class="vui-cascade__no-data"
      >{{ props.noDataText || 'no data' }}</div>
    </slot>

    <transition class='vui-cascade__fog-transition'>
      <div class="vui-cascade__fog" v-if='props.fog'></div>
    </transition>
  </div>
</div>
</template>

<script setup lang="ts">
import type { CascadeObj, CascadesConfig, OptionClickEmitOptions } from '@/types.d';

import { computed, ref } from 'vue';
import CascadeOption from './CascadeOption.vue';
import VuiInput from './../input/Input.vue';
import { styling, pixelsFromNumber } from '@/package/utils';

// PROPS
const props = defineProps<{
  cascade: CascadeObj
  padding: number
  fog: boolean
  canBack: boolean,
  configs: CascadesConfig | undefined
  noDataText?: string,
  filterable?: boolean,
  sortable?: boolean
}>();
// EMITS
const emit = defineEmits(['on-select', 'on-back']);

const filter = ref<string>('');
const sort = ref<'asc' | 'desc' | null>(null);

function changeSort() {
  if (sort.value === 'asc') sort.value = 'desc';
  else if (sort.value === 'desc') sort.value = null;
  else if (!sort.value) sort.value = 'asc';
}

/**
 * Filterable & sortable list of cascade options
 */
const optionsList = computed(() => {
  let arr = [...props.cascade.options];

  if (filter.value) arr = arr.filter(_ => _.title.startsWith(filter.value));
  if (props.sortable) {
    if (sort.value === 'desc') {
      arr = arr.sort((a,b) => b.title.localeCompare(a.title))
    } else if (sort.value === 'asc') {
      arr = arr.sort((a,b) => a.title.localeCompare(b.title))
    }
  }

  return arr;
});

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
    @apply w-full flex items-center space-x-1 p-1;
  }

  &__back-btn {
    @apply h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-200;
  }

  &__sort-btn {
    @apply flex-shrink-0 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-200;

    &--selected {
      @apply text-blue-500;
    }
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
