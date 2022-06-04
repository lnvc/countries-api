<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '@/stores/theme';

const store = useTheme();
const theme = ref(store.theme);
store.$subscribe((_, state) => {
  theme.value = state.theme;
});
</script>

<template>
  <div :class="['container', theme]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.container {
  width: 100%;
  height: 100%;
}
.dark {
  background: $veryDarkBlue;
  color: $white;
}

.light {
  background: $veryLightGray;
  color: $veryDarkBlue;
}
</style>
