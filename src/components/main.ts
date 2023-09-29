import type { App } from 'vue';
import {
  Cascader
} from "@/components";

export default {
  install: (app: App) => {
    app.component('Cascader', Cascader);
  }
};

export {
  Cascader
};
