<template>
  <div>
    <i>Show</i>
    <a>StackBlitz</a>
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
</script>
