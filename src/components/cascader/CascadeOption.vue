<template lang="pug">
.vui-cascade-option(
  @click='onClick'
  v-bind='styling'
  :title='props.option.title'
) 
  .vui-cascade-option__string
    .vui-cascade-option__string-left
      .vui-cascade-option__tree-btn-space
        .vui-cascade-option__tree-btn(
          v-if='hasChildOptions'
          @click.stop='isChildCollapseOpened = !isChildCollapseOpened'
          :class='{"vui-cascade-option__tree-btn--opened": isChildCollapseOpened}'
        )
          Icon(icon='bxs:right-arrow')

      CascadeOptionTitle(:option='props.option')
    .vui-cascade-oprion__next-btn(v-if='hasOwnOptions')
      span(v-if='!option.loadingState')
        Icon(icon='ep:arrow-right')
      span(v-else-if='option.loadingState === "process"')
        Icon(icon='ep:loading')
      span(v-else-if='option.loadingState === "ready"')
        Icon(icon='ep:refresh')

  CollapseBody(v-if='hasChildOptions' :expanded='isChildCollapseOpened' :option='props.option')
    CascadeOption(
      v-for='child in option.children' :key='child.id || child.value'
      :cascade='cascade'
      :option='child'
      @on-click='(opt) => emit("on-click", opt)'
    )
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { computed, inject, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { createStyleClasses } from '@/utils/createStyleClasses';
import CollapseBody from '../collapse/CollapseBody.vue';
import CascadeOptionTitle from './CascadeOptionTitle.vue';
import type { CascadeObj, CascadeOptionObj } from '@/types.d';

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
const styling = computed(() => createStyleClasses(({ classes }) => {
  if (isSelectedOption.value) classes.push('vui-cascade-option--selected');
}));

/**
 * Separate clicks if it is a last option in row (if has no own options)
 */
function onClick(): void {
  const params = { option: props.option, last: !hasOwnOptions.value };

  let shouldEmit = true;
  const preventEmit = () => shouldEmit = false; 

  props.option.onClick?.({ preventEmit, option: props.option });

  if (shouldEmit) {
    emit('on-click', params);
  }

}
</script>

<style scoped lang='scss'>
$el: 'vui-cascade-option';

.#{$el} {
  @apply w-full transition-all cursor-pointer;

  &--selected {
    & > .#{$el}__string {
      @apply bg-blue-200;
    }
  }

  &__string {
    @apply w-full flex justify-between items-center transition-all pr-1 hover:bg-gray-200;
  }

  &__string-left {
    @apply w-full flex justify-start items-center;
  }

  &__next-btn {
    @apply flex-shrink-0;
  }

  &__tree-btn-space {
    @apply text-gray-500 text-xs w-6 h-6 flex-shrink-0;
  }

  &__tree-btn {
    @apply hover:bg-gray-300 flex justify-center items-center w-full h-full rotate-0;

    &--opened {
      @apply rotate-90;
    }
  }
}
</style>
