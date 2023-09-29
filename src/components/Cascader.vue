<template lang='pug'>
.relative
  .border.h-8(@click='onInputClick') {{ inputLabel }}

  .absolute.top-8.left-0
    TransitionGroup(
      tag='div'
      mode='in-out'
      enter-from-class='translate-x-60 opacity-0'
      enter-active-class='transition-all duration-500'
      enter-to-class='opacity-100'
      leave-from-class='opacity-100'
      leave-active-class='transition-all duration-500'
      leave-to-class='translate-x-60 opacity-0'
    )
      Cascade(
        v-for='(cascade, i) in visibleCascades'
        :key='cascade.id'
        :cascade='cascade'
        :padding='i'
        :fog='!isCurrent(cascade)'
        :canBack='i > 0'
        @on-select='onSelectOption'
        @on-back='removeCascade'
      )
</template>

<script setup lang='ts'>
import type { Ref } from 'vue';
import { computed, provide, ref } from 'vue';
import Cascade from './Cascade.vue';

// PROPS
const props = withDefaults(defineProps<{
  modelValue: SelectedOption[];
  data: CascadeOptionObj[],
  separator?: string
}>(), {
  separator: '/'
})

/**
 * *KLUDGE to make 1st cascade similar to others
 */
const rootOption: CascadeOptionObj = {
  value: '__ROOT_CASCADE__',
  title: '',
  options: props.data
}

/**
 * Are cascades visible
 */
const isOpened: Ref<boolean> = ref(false);

/**
 * Calculated cascades 
 */
const cascades: Ref<CascadeObj[]> = ref([]);

/**
 * visibleCascades
 */
const visibleCascades = computed(() => {
  if (!isOpened.value) return [];

  if (!cascades.value.length) {
    createCascadeFrom(rootOption);
  }

  return cascades.value;
});

/**
 * Array of selected options from each cascade
 * *Provide it deeper
 */
const selectedOptions: Ref<SelectedOption[]> = ref([]);
provide('selectedOptions', selectedOptions);

/**
 * Array of selected-options' values
 */
// const selectedValues = computed(() => {
//   return selectedOptions.value.map(_ => _.option.value)
// });

/**
 * Array of selected-options' titles
 */
const selectedTitles = computed(() => {
  return selectedOptions.value.map(_ => _.option.title)
});

const inputLabel = computed(() => {
  return selectedTitles.value.join(props.separator)
})

/**
 * Is the cascade last and active
 */
const isCurrent = (cascade: CascadeObj) => {
  return cascades.value[cascades.value.length - 1]?.id === cascade.id;
};

/**
 * Hide or open cascades
 */
function setIsOpened(val: boolean) {
  isOpened.value = val;
}

/**
 * On input click
 */
function onInputClick() {
  setIsOpened(true);
}

/**
 * On click outside the cascader
 */
// function onClickOutside() {
//   setIsOpened(false);
// }

/**
 * On emit recieved
 */
function onSelectOption({ cascade, optionParams }: CascadeSelectEmitOptions) {
  selectedOptions.value[cascade.id] = {
    cascadeId: cascade.id,
    option: optionParams.option
  };

  if (optionParams.last) {
    setIsOpened(false);
    return;
  }
  
  createCascadeFrom(optionParams.option)
}

/**
 * Create cascade obj and push to arr
 */
function createCascadeFrom(_: CascadeOptionObj) {
  const newIdx = cascades.value.length;

  cascades.value.push({
    id: newIdx,
    options: _.options || []
  });
}

/**
 * Remove last cascade
 */
function removeCascade() {
  cascades.value.pop();
}
</script>