import 'uno.css';
import '@unocss/reset/tailwind.css'

import type { App } from 'vue';
import {
  VuiCascader,
  VuiButton
} from './components';

import { styling } from '@/package/utils/styling';

export default {
  install: (app: App) => {
    app.component('VuiButton', VuiButton);
    app.component('VuiCascader', VuiCascader);
  }
};

export {
  // Components
  VuiButton,
  VuiCascader,

  // Utils
  styling
};
