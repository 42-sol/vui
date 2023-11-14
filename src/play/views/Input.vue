<template>
  <div _flex='~ col' _space-y-4>
    <h2>VuiInput</h2>

    <section>
      <h3>Simple Input</h3>
      <p>It's value: {{ value1 }}</p>
      <vui-input _w-64 v-model='value1'/>
    </section>

    <section>
      <h3>Clearable Input</h3>
      <p>It's value: {{ value2 }}</p>
      <vui-input v-model='value2' clearable/>
    </section>

    <section>
      <h3>Input with placeholder</h3>
      <p>It's value: {{ value3 }}</p>
      <vui-input v-model='value3' placeholder='Test placeholder'/>
    </section>

    <section>
      <h3>Input with placeholder</h3>
      <p>It's value: {{ value4 }}</p>
      <vui-input
      v-model='value4'
      clearable
      @on-input='onInput'
      @on-focus='onFocus'
      @on-blur='onBlur'
      @on-change='onChange'
      />
      <p>Events: {{ events.join(', ') }}</p>
    </section>

    <section>
      <h3>Always-error input</h3>
      <vui-input v-model='value5' error/>
    </section>

    <section>
      <h3>Disabled input</h3>
      <vui-input v-model='value6' disabled/>
    </section>

    <section>
      <h3>Readonly input</h3>
      <vui-input v-model='value7' readonly/>
    </section>

    <section>
      <h3>Focus & blur</h3>
      <div _flex _space-x-2 _my-2>
        <button _border @click='focusOn8'>Focus</button>
        <button _border @click='blur8'>Blur</button>
      </div>
      <vui-input ref='inputEl8' v-model='value8'/>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';

import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('disabled test value');
const value7 = ref('readonly test value');
const value8 = ref('focus/blur test value');
const events: Ref<string[]> = ref([]);

const onChange = () => events.value.push('onChange');
const onInput = () => events.value.push('onInput');
const onFocus = () => events.value.push('onFocus');
const onBlur = () => events.value.push('onBlur');

const inputEl8 = ref(null) as Ref<HTMLInputElement | null>;
function focusOn8() {
  inputEl8.value?.focus();
}
function blur8() {
  inputEl8.value?.blur();
}
</script>

<style lang='scss' scoped>
h2 {
  @apply text-2xl;
}

section h3 {
  @apply text-xl;
}
</style>
