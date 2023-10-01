# 42sol-vui (alpha)

## Install
```bash
npm install @42sol/vui
# or
yarn add @42sol/vui
```

## Usage
### Import on demand
```jsx
<template>
  <Button type='primary' class='m-2'>Hello VUI</Button>
</template>

<script>
import { Button } from '42sol/vui';
</script>
```

### Use plugin
```javascript
// src/main.js
import VUI from './components/main';
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
