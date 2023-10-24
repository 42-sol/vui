import { createApp } from 'vue';
import App from './App.vue';

import router from '@/play/router';
import VuiPlugin from '@/package/main';

const app = createApp(App);

app
  .use(router)
  .use(VuiPlugin)
  .mount('#app');
