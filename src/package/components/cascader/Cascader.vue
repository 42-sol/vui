<template>
<div ref='cascaderEl' class="vui-cascader">
  <div ref='inputWrapperEl' class="vue-cascader__input-wrapper">
    <cascade-input
    :values='selectedTitles'
    :separator='props.separator'
    :placeholder='props.placeholder'
    :disabled='props.disabled'
    @on-click='onInputClick'
    @on-clear='onClear'
    :clearable='props.clearable'
    ></cascade-input>
  </div>
  <div ref='dropdownEl' class="vui-cascader__dropdown">
    <transition-group tag='div' mode='in-out' name='vui-cascader-transition'>
      <cascade
      v-for='(cascade, i) in visibleCascades'
      :key='cascade.id'
      :cascade='cascade'
      :padding='i'
      :fog='!isCurrent(cascade)'
      :canBack='i > 0'
      :configs='props.cascadesConfig'
      @on-select='onSelectOption'
      @on-back='removeCascade'
      :noDataText='props.noDataText'
      >
        <template #cascadeNoData='{ cascade }'>
          <slot name='cascadeNoData' v-bind='cascade'></slot>
        </template>
        <template #beforeOptions='{ cascade }'>
          <slot name='beforeOptions' v-bind='{ cascade, selectedOptions }'></slot>
        </template>
      </cascade>
    </transition-group>
  </div>
</div>
</template>

<script setup lang='ts'>
import type { ComputedRef, Ref } from 'vue';
import type { CascadeObj, CascadeOptionObj, CascadesConfig, CascadeSelectEmitOptions } from '@/types.d';

import { computed, nextTick, onMounted, provide, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { computePosition, flip, shift, offset } from '@floating-ui/vue';
import Cascade from './Cascade.vue';
import CascadeInput from './CascadeInput.vue';

// PROPS
const props = withDefaults(defineProps<{
  modelValue: unknown;
  data: CascadeOptionObj[],
  separator?: string
  cascadesConfig?: CascadesConfig,
  transform?: (_modelValue: unknown, _createCascadeFrom: (_: CascadeOptionObj, id: number) => void) => CascadeOptionObj[],
  reform?: (_selectedOptions: CascadeOptionObj[]) => unknown,
  placeholder?: string,
  disabled?: boolean,
  clearable?: boolean
}>(), {
  separator: '/',
  placeholder: '',
  noDataText: ''
});
// EMITS
const emit = defineEmits(['update:modelValue']);

/**
 * Cascader root HTML element
 */
const cascaderEl = ref(null);
const inputWrapperEl = ref(null);
const dropdownEl = ref(null);

/**
 * Are cascades visible
 */
const isOpened: Ref<boolean> = ref(false);

/**
 * Error string displayed
 */
const errorMsg: Ref<string> = ref('');

/**
 * Calculated cascades 
 */
const cascades: Ref<CascadeObj[]> = ref([]);

/**
 * Visible cascades
 */
const visibleCascades = computed(() => {
  if (!isOpened.value) return [];

  return cascades.value;
});

/**
 * Array of selected options from each cascade
 * *Provide it deeper
 */
const selectedOptions: Ref<CascadeOptionObj[]> = ref([]);
provide('selectedOptions', selectedOptions);

/**
 * *KLUDGE to make 1st cascade similar to others
 */
const rootOption: ComputedRef<CascadeOptionObj> = computed(() => ({
  value: '__ROOT_CASCADE__',
  title: '',
  options: props.data
}));

function refresh() {
  addCreatedCascadeFrom(rootOption.value, 0);
  selectedOptions.value = transformData(props.modelValue || []);
}
refresh();

watch(() => props.data, () => {
  refresh();
})

/**
 * Array of selected-options' titles
 */
const selectedTitles = computed(() => {
  return selectedOptions.value.map(_ => _.title)
});

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
  if (val && props.disabled) return;

  isOpened.value = val;
  
  if (!val) {
    selectedOptions.value = transformData(props.modelValue || []);
  }
};

/**
 * MOUNTED hook
 */
onMounted(() => {
  // On click outside root element
  onClickOutside(cascaderEl.value, clickOutside);

  const input = inputWrapperEl.value! as HTMLElement
  const dropdown = dropdownEl.value! as HTMLElement

  computePosition(input, dropdown, {
    middleware: [
      flip(),
      offset(4),
      shift()
    ],
  }).then(({y}) => {
    Object.assign(dropdown.style, {
      top: `${y}px`,
    });
  });
});

/**
 * On input click
 */
function onInputClick() {
  setIsOpened(true);
};

/**
 * On click outside the cascader
 */
function clickOutside() {
  setIsOpened(false);
}

/**
 * On emit recieved
 */
function onSelectOption({ cascade, optionParams }: CascadeSelectEmitOptions) {
  selectedOptions.value = selectedOptions.value.slice(0, cascade.id)
  selectedOptions.value[cascade.id] = optionParams.option;

  if (optionParams.last) {
    emit('update:modelValue', reformData(selectedOptions.value));

    nextTick(() => {
      setIsOpened(false);
    });
    return;
  }
  
  addCreatedCascadeFrom(optionParams.option)
};

/**
 * Create cascade obj and push to arr
 */
function addCreatedCascadeFrom(option: CascadeOptionObj, id?: number) {
  const newIdx = (id === undefined || id === null) ? cascades.value.length : id;
  if (id !== undefined) cascades.value = cascades.value.slice(0, id);
  cascades.value.push(createCascadeFrom(option, newIdx));
  console.log(cascades.value)
};

/**
 * Create cascade obj
 */
function createCascadeFrom(option: CascadeOptionObj, id: number) {
  const cascade: CascadeObj = { id, options: option.options || [], loadStatus: undefined };

  console.log(option)
  if (option.getAsyncOptions) {
    cascade.loadStatus = 'process';

    option.getAsyncOptions()
      .then((res: CascadeOptionObj[]) => {
        cascade.loadStatus = 'success';
        cascade.options.push(...res);
      })
      .catch(() => {
        cascade.loadStatus = 'error';
      });
  }

  return cascade;
}

/**
 * Remove last cascade
 */
function removeCascade() {
  cascades.value.pop();
};

/**
 * Clear the input - set model value as []
 */
function onClear() {
  selectedOptions.value = [];
  emit('update:modelValue', reformData([]));
  addCreatedCascadeFrom(rootOption.value, 0);
}

/**
 * Use transform-method from props or default one
 */
function transformData(_modelValue: unknown): CascadeOptionObj[] {
  if (props.transform) return props.transform(_modelValue, createCascadeFrom);

  // Default transform-data method (Expected that data is an array)
  const _selectedOptions: CascadeOptionObj[] = [];
  const values = _modelValue as (string | number)[]; 

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    const deepFindByValue = (arr: CascadeOptionObj[]): CascadeOptionObj | undefined => {
      let _ = arr?.find((_) => _.value === value);
      
      if (_) return _;

      for (let i = 0; i < arr?.length; i++) {
        if (arr[i].children?.length) {
          _ = deepFindByValue(arr[i].children!);

          if (_) return _;
        }
      }
    }

    const foundOption: CascadeOptionObj | undefined = deepFindByValue(cascades.value[i]?.options);
    
    if (foundOption) {
      _selectedOptions.push(foundOption);
      if (foundOption.options?.length) {
        addCreatedCascadeFrom(foundOption, i + 1);
      }
      else if (i < values.length -  1) {
        errorMsg.value = 'Can`t display such a value';
        break;
      }
      else if (i === values.length - 1) {
        errorMsg.value = '';
      }
    }
    else {
      errorMsg.value = 'Can`t display such a value';
      break;
    } 
  }

  return _selectedOptions;
}

/**
 * Use reform-method from props or default one
 */
function reformData(_selectedOptions: CascadeOptionObj[]): unknown {
  if (props.reform) return props.reform(_selectedOptions);

  // Default reform-data method (Expected that return is an array of values)
  return _selectedOptions.map(option => option.value);
}
</script>

<style scoped lang='scss'>
.vui-cascader {
  @apply relative;

  &__dropdown {
    z-index: var(--vui-floating-z-index);
    @apply absolute top-0 left-2;
  }

  &-transition {
    &-enter-from,
    &-leave-to {
      @apply translate-x-32 opacity-0;
    }
    &-enter-active,
    &-leave-active {
      @apply transition-all duration-500;
    }
    &-enter-to,
    &-leave-from {
      @apply opacity-100;
    }
  }
}
</style>
