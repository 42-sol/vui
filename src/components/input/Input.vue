<template lang='pug'>
input(:modelValue='props.modelValue' @input='onInput')
</template>

<script setup lang='ts'>
const props = defineProps<{
  modelValue: string | number
}>();

const emit = defineEmits(['update:modelValue']);

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<style lang='scss'>

</style>
