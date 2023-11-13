<template>
<div class="vui-collapse-body" v-bind='blockStyling'>
  <div
  ref='collapseBodyEl'
  class="vui-collapse-body__content"
  v-bind='collapseStyling'
  >
    <slot></slot>
  </div>
</div>
</template>

<script setup lang='ts'>
import type { Ref } from 'vue' 
import { computed, nextTick, onMounted, ref } from 'vue';
import { styling, pixelsFromNumber } from '@/package/utils';

// PROPS
const props = defineProps<{
  expanded: boolean,
  padding?: string | number
}>();

/**
 * Collapsable html element
 */
const collapseBodyEl = ref(null) as Ref<HTMLElement | null>;

/**
 * Element possible height
 */
const height: Ref<number | undefined> = ref(0);

/**
 * MOUNTED
 */
onMounted(() => {
  collapseBodyEl.value?.addEventListener('vui-collapse-expand-changed', onExpandEvent as EventListener);
  height.value = collapseBodyEl.value?.offsetHeight || 0;
});

/**
 * *KLUDGE to emit updating height of child collapses
 */
function onExpandEvent(e: CustomEvent) {
  if (e.target !== collapseBodyEl.value) refreshHeight();
}

/**
 * To forget height value and let it be auto
 */
function refreshHeight() {
  height.value = undefined;
}

/**
 * Update element possible height
 */
function updateHeight() {
  if (props.expanded) {
    height.value = collapseBodyEl.value?.offsetHeight || 0;
  }
  else height.value = 0;
}

/**
 * Computed to watch expanded props & updateHeight
 */
const _isOpened = computed(() => {
  nextTick(() => updateHeight())
  return props.expanded;
});

function floatExpandEvent() {
  const _ = new CustomEvent('vui-collapse-expand-changed', { bubbles: true });
  collapseBodyEl.value?.dispatchEvent(_);
}

/**
 * v-bind class & style to root component
 */
const blockStyling = computed(() => styling(({ styles }) => {
  if (height.value !== undefined) {
    if (_isOpened.value) {
      styles.height = `${height.value}px`;
      styles.opacity = '1';
      floatExpandEvent();
    }
  
    else {
      styles.height = '0';
      styles.opacity = '0';
    }
  } else {
    updateHeight()
  }
}));

/**
 * v-bind class & style to collapse component
 */
const collapseStyling = computed(() => styling(({ styles }) => {
  styles.paddingLeft = pixelsFromNumber(props.padding || '1rem')
}));
</script>

<style scoped lang='scss'>
.vui-collapse-body {
  @apply transition-all overflow-hidden;
}
</style>
