import VUI from '@/components/main';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app
  .use(VUI)
  .mount('#app');
