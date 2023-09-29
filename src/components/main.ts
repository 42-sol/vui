import type { App } from 'vue';
import {
  Button,
  Cascader
} from "@/components";

export default {
  install: (app: App) => {
    app.component('Button', Button);
    app.component('Cascader', Cascader);
  }
};

export {
  Button,
  Cascader
};
