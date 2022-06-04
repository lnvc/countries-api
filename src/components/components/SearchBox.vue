<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '#/stores/theme';

const store = useTheme();
const theme = ref(store.theme);
store.$subscribe((_, state) => {
  theme.value = state.theme;
});
</script>

<template>
  <div :class="['container', theme]">
    <ion-icon name="search" class="searchIcon"></ion-icon>
    <input type="text" placeholder="Search for a country...">
  </div>
</template>

<style lang="scss" scoped>
@import "#/styles/variables.scss";
.container {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 7px;
  height: 3.5rem;
}
.searchIcon {
  position: absolute;
  left: 1.5rem;
}
input {
  background: transparent;
  outline: transparent;
  width: 100%;
  height: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border: 0;
}
.dark {
  background: $darkBlue;
  box-shadow: 0 1px 3px 0 $darkestBlue;
  input {
    color: $white;
  }
  input::placeholder {
    color: $white;
  }
}

.light {
  background-color: $white;
  box-shadow: 0 1px 3px 0 $darkGray;
}
</style>
