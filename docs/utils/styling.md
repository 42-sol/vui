# createStyleClasses

It can return `{ class, style }` for component by your callback
```
createStyleClasses(({ styles, classes }) => {})
```


## Usage
```html
<template>
<div v-bind='blockStyling'></div>
<!-- or -->
<div :style='blockStyling.style' :class='blockStyling.class'></div>
</template>

<script setup>
import { createStyleClasses } from '@42sol/vui';

const blockStyling = computed(() => createStyleClasses({ styles, classes }) => {
  if (/**something */) {
    styles.transform = 'scale(2)';
    classes.push('button-blue');
  }
});
// It will be reactive and will return { class: classes, style: styles }
</script>
```
