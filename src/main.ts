import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '#/router';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

// custom directive
app.directive('click-outside', {
  beforeMount: (el, binding) => {
    const clickOutside = (e: any) => {
      e.stopPropagation();
      // call passed function if clicked outside el
      if (e.target !== el && !el.contains(e.target) && !e?.target?.ariaLabel?.includes('chevron')) {
        binding.value();
      }
    };
    document.addEventListener('click', clickOutside);
  },
  unmounted: (el) => {
    const clickOutside = (e: any) => {
      e.stopPropagation();
      if (e.target !== el && !el.contains(e.target)) {
        return true;
      }
      return false;
    };
    document.removeEventListener('click', clickOutside);
  },
});

app.use(router);

app.use(pinia);

app.mount('#app');
