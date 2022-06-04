<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '#/stores/theme';

const store = useTheme();
const theme = ref(store.theme);
const toggleMode = () => {
  if (theme.value === 'dark') {
    store.$patch({ theme: 'light' });
  } else {
    store.$patch({ theme: 'dark' });
  }
};
store.$subscribe((_, state) => {
  theme.value = state.theme;
});
</script>

<template>
  <div :class="['container', theme]">
    <router-link :to="{ name: 'home' }">
      <h1>Where in the world?</h1>
    </router-link>
    <div
      tabindex="0"
      class="modeContainer"
      @click="toggleMode"
      @keyup.enter="toggleMode"
    >
      <ion-icon v-if="theme === 'dark'" name="moon"></ion-icon>
      <ion-icon v-else name="moon-outline"></ion-icon>
      <h2>{{ theme }} Mode</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "#/styles/variables.scss";
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

h2 {
  text-transform: capitalize;
}

.modeContainer {
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
}
</style>
