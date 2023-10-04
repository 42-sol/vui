<template lang='pug'>
.vui-cascader(ref='cascaderEl')
  .vue-cascader__input-wrapper(ref='inputWrapperEl')
    CascadeInput(
      :values='selectedTitles'
      :separator='props.separator'
      @on-click='onInputClick'
    )

  .vui-cascader__dropdown(ref='dropdownEl')
    TransitionGroup(tag='div' mode='in-out' name='vui-cascader-transition')
      Cascade(
        v-for='(cascade, i) in visibleCascades'
        :key='cascade.id'
        :cascade='cascade'
        :padding='i'
        :fog='!isCurrent(cascade)'
        :canBack='i > 0'
        :configs='props.cascadesConfig'
        @on-select='onSelectOption'
        @on-back='removeCascade'
      )
</template>

<script setup lang='ts'>
import type { Ref } from 'vue';
import { computed, nextTick, onMounted, provide, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import Cascade from './Cascade.vue';
import CascadeInput from './CascadeInput.vue';
import { computePosition, flip, shift, offset } from '@floating-ui/vue';

// PROPS
const props = withDefaults(defineProps<{
  modelValue: unknown;
  data: CascadeOptionObj[],
  separator?: string
  cascadesConfig?: CascadesConfig,
  transform?: (_modelValue: unknown, _createCascadeFrom: (_: CascadeOptionObj, id: number) => void) => CascadeOptionObj[],
  reform?: (_selectedOptions: CascadeOptionObj[]) => unknown
}>(), {
  separator: '/'
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
 * *KLUDGE to make 1st cascade similar to others
 */
const rootOption: CascadeOptionObj = {
  value: '__ROOT_CASCADE__',
  title: '',
  options: props.data
};

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
addCreatedCascadeFrom(rootOption, 0);
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
selectedOptions.value = transformData(props.modelValue);
provide('selectedOptions', selectedOptions);

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
  isOpened.value = val;
  
  if (!val) {
    selectedOptions.value = transformData(props.modelValue);
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
  const newIdx = id || cascades.value.length;
  if (id !== undefined) cascades.value = cascades.value.slice(0, id);
  cascades.value.push(createCascadeFrom(option, newIdx));
};

/**
 * Create cascade obj
 */
function createCascadeFrom(option: CascadeOptionObj, id: number) {
  return { id, options: option.options || [] };
}

/**
 * Remove last cascade
 */
function removeCascade() {
  cascades.value.pop();
};

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
      let _ = arr.find((_) => _.value === value);
      
      if (_) return _;

      for (let i = 0; i < arr.length; i++) {
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
    @apply absolute top-0 left-2;
  }

  &-transition {
    &-enter-from,
    &-leave-to {
      @apply translate-x-60 opacity-0;
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
