<template>
<div
  v-bind='blockStyling'
  class="vui-cascade-option"
  :title='props.option.title'
  @click='onClick'
>
  <div class="vui-cascade-option__string">
    <div class="vui-cascade-option__string-left">
      <div class="vui-cascade-option__tree-btn-space">
        <div
        v-if='hasChildOptions'
          class="vui-cascade-option__tree-btn"
          :class='{"vui-cascade-option__tree-btn--opened": isChildCollapseOpened}'
          @click.stop='isChildCollapseOpened = !isChildCollapseOpened'
        >
          <i _i-bxs:right-arrow></i>
        </div>
      </div>

      <cascade-option-title :option='props.option'></cascade-option-title>
    </div>
    <div v-if='hasOwnOptions' class="vui-cascade-oprion__next-btn">
      <div _i-ep:arrow-right></div>
      <!-- <span v-else-if='option.loadStatus === "process"'>
        <i _i-ep:loading></i>
      </span>
      <span v-else-if='option.loadStatus === "success" || option.loadStatus === "error"'>
        <i _i-ep:refresh></i>
      </span> -->
    </div>
  </div>

  <collapse-body
    v-if='hasChildOptions'
    :expanded='isChildCollapseOpened'
    :option='props.option'
  >
    <cascade-option
      v-for='child in option.children' :key='child.id || child.value'
      :cascade='cascade'
      :option='child'
      @on-click='(opt: OptionClickEmitOptions) => emit("on-click", opt)'
      @click.stop
    ></cascade-option>
  </collapse-body>
</div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import type { CascadeObj, CascadeOptionObj, OptionClickEmitOptions } from '@/types.d';

import { computed, inject, ref } from 'vue';
import { styling } from '@/package/utils';
import CollapseBody from '../collapse/CollapseBody.vue';
import CascadeOptionTitle from './CascadeOptionTitle.vue';

//PROPS
const props = defineProps<{
  option: CascadeOptionObj,
  cascade: CascadeObj
}>();
// INJECTED
const selectedOptions: Ref<CascadeOptionObj[]> | undefined = inject('selectedOptions');
//EMITS
const emit = defineEmits(['on-click']);

/**
 * Prop to open collapse with child options
 */
const isChildCollapseOpened = ref(false);

/**
 * Has options for a new cascade?
 */
const hasOwnOptions = computed(() => {
  return !!props.option.options || !!props.option.getAsyncOptions;
});

/**
 * Has sub-options like a tree structure?
 */
const hasChildOptions = computed(() => {
  return !!props.option.children
});

/**
 * Is current option has already been selected
 */
const isSelectedOption = computed(() => {
  const sameCascadeSelected = selectedOptions?.value?.find((_, i) => i === props.cascade.id);
  if (!sameCascadeSelected) return false;

  const sameCascadeSelectedId = sameCascadeSelected.id ?? sameCascadeSelected.value;
  const optionId = props.option.id || props.option.value;

  return sameCascadeSelectedId === optionId;
});

/**
 * Returns { class, style } for v-bind
 */
const blockStyling = computed(() => styling(({ classes }) => {
  if (isSelectedOption.value) classes.push('vui-cascade-option--selected');
}));

/**
 * Separate clicks if it is a last option in row (if has no own options)
 */
function onClick(): void {
  const params: OptionClickEmitOptions = { option: props.option, last: !hasOwnOptions.value };

  let shouldEmit = true;
  const preventEmit = () => shouldEmit = false;

  props.option.onClick?.({ preventEmit, option: props.option });

  if (shouldEmit) {
    emit('on-click', params);
  }
}
</script>

<style lang='scss'>
$el: 'vui-cascade-option';

.#{$el} {
  @apply w-full transition-all cursor-pointer;

  & .#{$el}--selected {
    & > .#{$el}__string {
      @apply bg-blue-200;
    }
  }

  & .#{$el}__string {
    @apply w-full flex justify-between items-center transition-all pr-1 hover:bg-gray-200;
  }

  & .#{$el}__string-left {
    @apply w-full flex justify-start items-center;
  }

  & .#{$el}__next-btn {
    @apply flex-shrink-0;
  }

  & .#{$el}__tree-btn-space {
    @apply text-gray-500 text-xs w-6 h-6 flex-shrink-0;
  }

  & .#{$el}__tree-btn {
    @apply hover:bg-gray-300 flex justify-center items-center w-full h-full rotate-0;

    &--opened {
      @apply rotate-90;
    }
  }
}
</style>
