<template>
  <div class='vui-clickable-clip' @click='(e) => clip(e.clientX, e.clientY)'>
    <div
    class="vui-clickable-clip__shape"
    v-for='shape in shapes'
    :key='shape.id'
    :style='makeShapeClass(shape)'
    ></div>

    <div class="vui-clickable-clip__wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { styling } from '@/package/utils';

type Shape = { x: number, y: number, id: number, collapsed: boolean };

const shapes = ref<Shape[]>([]);

function makeShapeClass(shape: Shape) {
  return styling(({ styles }) => {
    styles.clipPath = `circle(20% at ${shape.x}px ${shape.y}px)`
  }).style;
}

function clip(x = 0, y = 0) {
  let id = 0;

  if (shapes.value.length) {
    id = shapes.value[shapes.value.length - 1].id
  } 

  shapes.value.push({ x, y, id, collapsed: false });

  setTimeout(() => {
    shapes.value.shift();
  }, 3000);
}

defineExpose({
  clip
});
</script>

<style scoped lang='scss'>
$el: 'vui-clickable-clip';

.#{$el} {
  @apply relative;

  &__wrapper {
    @apply relative;
  }

  &__shape {
    @apply absolute top-0 left-0 w-full h-full bg-red-300 opacity-30;
  }
}
</style>
