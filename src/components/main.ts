import type { App } from 'vue';
import { MyButton } from "@/components";

export default {
  install: (app: App) => {
    app.component('MyButton', MyButton);
  }
};

export { MyButton };
