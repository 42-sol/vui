<template>
  <button v-bind='buttonStyling' @click='onClick'>
    <div ref='clickableClipsEl' class="clickable-clips">
      <div
      class="clickable-center"
      v-for='clip in clickClips'
      :key='clip.id'
      v-bind='clipCenterStyling(clip)'
      >
        <div
        class="clickable-circle"
        v-bind='clipCircleStyling(clip)'
        ></div>
      </div>
    </div>

    <div class="relative">
      <slot />
    </div>
  </button>
</template>  

<script setup lang="ts">
import { styling } from '@/package/main';
import { computed, ref } from 'vue';

type VuiButttonType = 'default' | 'primary' | 'error' | 'warning' | 'success';

const blockName = 'vui-button';

const props = withDefaults(
  defineProps<{
    type?: VuiButttonType
  }>(),
  {
    type: 'default'
  }
);

const buttonStyling = computed(() => styling(({ classes }) => {
  classes.push(blockName, `${blockName}--${props.type}`)
}));

function onClick(e: MouseEvent) {
  const x: number = e.offsetX;
  const y: number = e.offsetY;

  addClickClips({ x, y });
}

// ClicableArea
const clickableClipsEl = ref<HTMLElement | undefined>();

interface ClipCenter { x: number, y: number };
interface ClickClip extends ClipCenter { id: number, r: number, collapsed?: boolean };

const clipTransition = 600;

const clickClips = ref<ClickClip[]>([]);

let lastId = 0;

function addClickClips({ x, y }: ClipCenter) {
  const id = lastId + 1;
  lastId++;
  const container = clickableClipsEl.value;
  const W = container?.offsetWidth || 0;
  const H = container?.offsetHeight || 0;
  const r = W > H ? W : H;
  const clickClip: ClickClip = { id, x, y, r, collapsed: false };
  clickClips.value.push(clickClip);

  setTimeout(() => {
    const currentClipIdx = clickClips.value.findIndex(_ => _.id === id);
    clickClips.value[currentClipIdx].collapsed = true;
  }, 0);

  setTimeout(() => {
    const currentClipIdx = clickClips.value.findIndex(_ => _.id === id);
    clickClips.value.splice(currentClipIdx, 1);
  }, clipTransition);
};

const clipCenterStyling = computed(() => (clip: ClickClip) => styling(({ styles }) => {
  styles.top = `${clip.y}px`;
  styles.left = `${clip.x}px`;
}));

const clipCircleStyling = computed(() => (clip: ClickClip) => styling(({ styles }) => {
  styles.width = `${ clip.r * 2 }px`;
  styles.height = `${ clip.r * 2 }px`;
  styles.transition = `transform ${clipTransition}ms ease, opacity ${clipTransition}ms ease`;
  styles.transform = `scale(${ clip.collapsed ? 1 : 0 })`
  styles.opacity = `${ clip.collapsed ? 0 : 50 }%`
}));

</script>

<style scoped lang='scss'>
.vui-button {
  @apply relative border p-1 rounded shadow-xl transition-shadow;

  &:active {
    @apply shadow;
  }
  &:focus {
    outline: 2px solid rgba(59, 130, 246, .5);
  }

  &--default {
    @apply bg-white;
  }
  &--primary {
    @apply bg-blue-500;
  }
  &--error {
    @apply bg-red-500;
  }
  &--warning {
    @apply bg-yellow-500;
  }
  &--success {
    @apply bg-green-500;
  }
}

.clickable-clips {
  @apply absolute top-0 left-0 w-full h-full overflow-hidden;
}

.clickable-center {
  @apply absolute top-0 left-0 w-0 h-0 flex items-center justify-center;
}

.clickable-circle {
  @apply absolute rounded-full bg-gray-500;
}
</style>