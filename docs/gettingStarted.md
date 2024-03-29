# Getting started

## Installation
```bash
npm install @42sol/vui
# or
yarn add @42sol/vui
```

## Usage

### Use plugin
```js
// src/main.js
import VuiPlugin from './components/main';
import '@42sol/vui/dist/42sol-vui.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app
  .use(VuiPlugin)
  .mount('#app');
```

```jsx
<template>
  <Button type='primary'>Hello VUI</Button>
</template>
```

### Import on demand
```jsx
<template>
  <Button type='primary'>Hello VUI</Button>
</template>

<script>
import { Button } from '42sol/vui';
</script>
```

> Do not forget to import lib styles
```js
// Probably src/main.js
import '@42sol/vui/dist/42sol-vui.css';
```