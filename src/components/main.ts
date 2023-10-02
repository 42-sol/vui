import '@/styles/index.scss';

import type { App } from 'vue';

import {
  Cascader,
  CollapseBody
} from "@/components";

import { createStyleClasses } from '@/utils/createStyleClasses';

export default {
  install: (app: App) => {
    app.component('Cascader', Cascader);
    app.component('CollapseBody', CollapseBody);
  }
};

export {
  // Components
  Cascader,
  CollapseBody,

  // Utils
  createStyleClasses
};
