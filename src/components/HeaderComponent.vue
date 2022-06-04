<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '@/stores/theme';

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
    <h1>Where in the world?</h1>
    <div>
      <h2 @click="toggleMode">{{ theme }} Mode</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dark {
  background: $darkBlue;
}

.light {
  background: $white;
}
</style>
