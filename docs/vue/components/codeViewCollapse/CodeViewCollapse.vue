<template>
  <div>
    <i @click='setCodeCollapseStateAs("js")'>JS</i>
    <i @click='setCodeCollapseStateAs("ts")'>TS</i>
    <!-- <a>StackBlitz</a> -->
  </div>

  <vui-collapse :expanded='!!codeCollapseState'>
    <slot v-bind='{ codeCollapseState }'></slot>
  </vui-collapse>
</template>

<script setup lang='ts'>
import type { Ref } from 'vue';
import { ref } from 'vue';
import { VuiCollapse } from '@42sol/vui';

const codeCollapseState: Ref<'ts' | 'js' | null> = ref(null);

function setCodeCollapseStateAs(str) {
  if (codeCollapseState.value === str) {
    codeCollapseState.value = null;
  }

  codeCollapseState.value = str;
}
</script>
