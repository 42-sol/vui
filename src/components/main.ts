import type { App } from 'vue';
import { Button } from "@/components";

export default {
  install: (app: App) => {
    app.component('Button', Button);
  }
};

export { Button };
