<template lang="pug">
.flex.w-full.justify-between.items-center.transition-all.cursor-pointer.pr-2(
  @click='onClick'
  v-bind='styling'
  :title='props.option.title'
) 
  .flex.justify-start.items-center.pl-4
    span.p-1(
      class='transition-all hover:bg-gray-300'
      @click.stop='isChildCollapseOpened = !isChildCollapseOpened'
    )
      span(v-if='hasChildOptions')
        Icon.text-gray-500.text-xs(icon='bxs:right-arrow' :class='{"rotate-90": isChildCollapseOpened}')
    div.py-1 {{ props.option.title }}
  .flex-shrink-0(v-if='hasOwnOptions')
    span(v-if='!option.loadingState')
      Icon(icon='ep:arrow-right')
    span(v-else-if='option.loadingState === "process"')
      Icon(icon='ep:loading')
    span(v-else-if='option.loadingState === "ready"')
      Icon(icon='ep:refresh')

.pl-4(v-if='hasChildOptions')
  CollapseBody(:expanded='isChildCollapseOpened' :option='props.option')
    CascadeOption(
      v-for='child in option.children'
      :key='child.id || child.value'
      :cascade='cascade'
      :option='child'
      @on-click='(opt) => emit("on-click", opt)'
    )
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { computed, inject, ref } from 'vue';
import { Icon } from '@iconify/vue';
import CollapseBody from './CollapseBody.vue';
import { createStyleClasses } from '../utils/createStyleClasses';

//PROPS
const props = defineProps<{
  option: CascadeOptionObj
  cascade: CascadeObj
}>();
// INJECTED
const selectedOptions: Ref<SelectedOption[]> | undefined = inject('selectedOptions');
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
  const sameCascadeSelected = selectedOptions?.value?.find(_ => _.cascadeId === props.cascade.id);
  if (!sameCascadeSelected) return false;

  const sameCascadeSelectedId = sameCascadeSelected.option.id ?? sameCascadeSelected.option.value;
  const optionId = props.option.id || props.option.value;

  return sameCascadeSelectedId === optionId;
});

/**
 * Returns { class, style } for v-bind
 */
const styling = computed(() => createStyleClasses(({ classes }) => {
  classes.push('hover:bg-gray-200');
  if (isSelectedOption.value) classes.push('bg-blue-100');
}));

/**
 * Separate clicks if it is a last option in row (if has no own options)
 */
function onClick(): void {
  const params = { option: props.option, last: !hasOwnOptions.value };
  emit('on-click', params);
}
</script>

<style scoped>

</style>