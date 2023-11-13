import type { App } from 'vue';

import 'uno.css';
import '@/package/styles/index.scss';

import {
  VuiCascader,
  VuiButton,
  VuiInput
} from './components';

import { styling } from '@/package/utils/styling';

export default {
  install: (app: App) => {
    app.component('VuiButton', VuiButton);
    app.component('VuiCascader', VuiCascader);
    app.component('VuiInput', VuiInput);
  }
};

export {
  // Components
  VuiButton,
  VuiCascader,
  VuiInput,

  // Utils
  styling
};
