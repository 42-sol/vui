<template>
<div ref='cascaderEl' class="vui-cascader">
  <div ref='inputWrapperEl' class="vue-cascader__input-wrapper">
    <vui-input
      ref='inputEl'
      :modelValue='inputModelValue'
      @on-input='onInputModelValue'
      :clearable='props.clearable'
      :placeholder='props.placeholder'
      :disabled='props.disabled'
      @on-focus='onInputClick'
      :readonly='!props.filterable'
    />
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
      :filterable='props.filterableCascades'
      :sortable='props.sortableCascades'
      >
        <template #cascadeLoading='{ cascade }'>
          <slot name='cascadeLoading' v-bind='{ cascade }'></slot>
        </template>
        <template #cascadeNoData='{ cascade }'>
          <slot name='cascadeNoData' v-bind='{ cascade }'></slot>
        </template>
        <template #beforeOptions='{ cascade }'>
          <slot name='beforeOptions' v-bind='{ cascade, selectedOptions }'></slot>
        </template>
      </cascade>

      <cascade
      v-if='props.filterable && needFilteredValues && inputModelValue'
      key='filterCascade'
      :cascade='{ id: 1, options: allFilteredLastOptions }'
      :configs='props.cascadesConfig'
      @on-select='onSelectFilteredOption'
      :noDataText='props.noDataText'
      :sortable='props.sortableCascades'
      >
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
import { VuiInput } from '@/package/components';

// PROPS
const props = withDefaults(defineProps<{
  modelValue: unknown
  data: CascadeOptionObj[]
  separator?: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  cascadesConfig?: CascadesConfig
  transform?: (_modelValue: unknown, _createCascadeFrom: (_: CascadeOptionObj, id: number) => void) => CascadeOptionObj[]
  reform?: (_selectedOptions: CascadeOptionObj[]) => unknown
  filterable?: boolean
  filterableCascades?: boolean
  sortableCascades?: boolean
}>(), {
  separator: '/',
  placeholder: '',
  noDataText: ''
});
// EMITS
const emit = defineEmits(['update:modelValue']);

// REFS
const cascaderEl = ref(null);
const inputWrapperEl = ref(null);
const inputEl = ref(null) as Ref<HTMLInputElement | null>;
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
 * Value to filter options by input
 */
const inputModelValue = ref('');
const needFilteredValues = ref(false);
function onInputModelValue(v: string) {
  needFilteredValues.value = true;
  inputModelValue.value = v;
}

/**
 * All possible end-options from data
 */
const allLastOptions = computed<CascadeOptionObj[]>(() => {
  const arr: CascadeOptionObj[] = [];

  if (props.data?.length) {
    const findRecursive = (
      collection: CascadeOptionObj[],
      fields: ("children" | "options")[],
      cond: (item: CascadeOptionObj) => boolean,
      previousData?: (number | string)[]
    ) => {
      collection.forEach((item: CascadeOptionObj) => {
        const reducedPreviousData = previousData?.[0] ? [previousData?.[0]] : [];
        const _previousData = [ ...reducedPreviousData, item.value ];

        if (cond(item)) arr.push({ id: item.id, value: item.value, title: item.title, previousData: reducedPreviousData });

        fields.forEach((field) => {
          if (item[field]?.length) {
            findRecursive(item[field] as CascadeOptionObj[], fields, cond, _previousData);
          }
        });
      });
    }

    findRecursive(props.data, ["children", "options"], (item: CascadeOptionObj) => !(item.options || item.getAsyncOptions));
  }

  return arr;
});

const allFilteredLastOptions = computed(() => {
  return allLastOptions.value.filter(_ => _.title.startsWith(inputModelValue.value));
})

/**
 * *KLUDGE to make 1st cascade similar to others
 */
const rootOption: ComputedRef<CascadeOptionObj> = computed(() => ({
  value: '__ROOT_CASCADE__',
  title: '',
  options: props.data
}));

function refresh() {
  needFilteredValues.value = false;
  addCreatedCascadeFrom(rootOption.value, 0);
  selectedOptions.value = transformData(props.modelValue || []);
}
refresh();

watch(() => props.data, () => {
  refresh();
});
watch(() => selectedOptions.value, () => {
  const _ = selectedOptions.value.map(_ => _.title);
  inputModelValue.value = _.join(props.separator);
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
 * ?WRONG Difficult method to filter with cascades
 */
// function onInput(v: string) {
//   if (!v) return onClearInput();

//   const values = v.split(props.separator);
//   const savedSelectedOptions = [...selectedOptions.value];
//   clear();

//   const somethingWrong = () => selectedOptions.value = savedSelectedOptions;

//   for (let i = 0; i < values.length; i++) {
//     const opt = cascades.value[i]?.options?.find(_ => _.title === values[i])

//     if (!opt) {
//       somethingWrong();
//       break;
//     }

//     onSelectOption({
//       cascade: cascades.value[i],
//       optionParams: {
//         option: opt,
//         last: !(opt.options?.length || opt.getAsyncOptions)
//       }
//     });
//   }
// }

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
  needFilteredValues.value = false;
  selectedOptions.value = selectedOptions.value.slice(0, cascade.id);
  selectedOptions.value[cascade.id] = optionParams.option;

  if (optionParams.last) {
    emit('update:modelValue', reformData(selectedOptions.value));

    nextTick(() => {
      setIsOpened(false);
    });
    return;
  }

  addCreatedCascadeFrom(optionParams.option);
};

function onSelectFilteredOption({ optionParams }: CascadeSelectEmitOptions) {
  const selectedValue = optionParams.option.value;
  const previousValues = optionParams.option.previousData || [];

  const fullValue = [...previousValues, selectedValue];

  emit('update:modelValue', fullValue);

  nextTick(() => {
    refresh();
  });
}

/**
 * Create cascade obj and push to arr
 */
function addCreatedCascadeFrom(option: CascadeOptionObj, id?: number) {
  const newIdx = (id === undefined || id === null) ? cascades.value.length : id;
  if (id !== undefined) cascades.value = cascades.value.slice(0, id);
  cascades.value.push(createCascadeFrom(option, newIdx));
};

/**
 * Create cascade obj
 */
function createCascadeFrom(option: CascadeOptionObj, id: number) {
  const cascade: CascadeObj = { id, options: option.options || [], loadStatus: undefined };

  if (option.getAsyncOptions) {
    cascade.loadStatus = 'process';

    option.getAsyncOptions()
      .then((res: CascadeOptionObj[]) => {
        cascade.loadStatus = 'success';
        res.forEach((item) => {
          const alreadyExisted = cascade.options.findIndex(_ => _.id ? _.id === item.id : _.value === item.value);
          if (alreadyExisted >= 0) {
            cascade.options.splice(alreadyExisted, 1);
          }
          cascade.options.push(item);
        });
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
// function clear() {
//   selectedOptions.value = [];
//   addCreatedCascadeFrom(rootOption.value, 0);
// }

// function onClearInput() {
//   clear();
//   emit('update:modelValue', reformData(selectedOptions.value));
//   inputEl.value?.focus();
// }

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
$el: 'vui-cascader';

.#{$el} {
  @apply relative;

  & .#{$el}__dropdown {
    z-index: var(--vui-floating-z-index);
    @apply absolute top-0 left-0;
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
