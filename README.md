# 42sol-vui (alpha)

## Install
```bash
npm install @42sol/vui
# or
yarn add @42sol/vui
```

## Usage

### Use plugin
```js
// src/main.js
import VUI from '@42sol/vui';
import '@42sol/vui/dist/42sol-vui.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app
  .use(VUI)
  .mount('#app');
```

```jsx
<template>
  <Button type='primary' class='m-2'>Hello VUI</Button>
</template>
```

### Import on demand
```jsx
<template>
  <Button type='primary' class='m-2'>Hello VUI</Button>
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

## Components

- [Cascader]('./src/components/')