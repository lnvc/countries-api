<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '#/stores/theme';
import { REGIONS } from '#/utils/constants';

const store = useTheme();
const theme = ref(store.theme);
const isExpanded = ref(false);
store.$subscribe((_, state) => {
  theme.value = state.theme;
});

const handleDropdownClick = () => {
  isExpanded.value = !isExpanded.value;
};

const handleClickOutside = () => {
  isExpanded.value = false;
};
</script>

<template>
  <div class="container" v-click-outside="handleClickOutside">
    <div
      tabindex="0"
      :class="['filterButton', theme]"
      @click="handleDropdownClick"
      @keyup.enter="handleDropdownClick"
    >
      <span>Filter by Region</span>
      <ion-icon v-if="isExpanded" name="chevron-up"></ion-icon>
      <ion-icon v-else name="chevron-down"></ion-icon>
    </div>
    <div v-if="isExpanded" :class="['regionContainer', theme]">
      <ul tabindex="0" v-for="region in REGIONS" :key="region">
        {{ region }}
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "#/styles/variables.scss";
.container {
  display: grid;
  row-gap: 0.4rem;
  z-index: 1000;
}
.filterButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 7px;
  cursor: pointer;
  height: 3.5rem;
}

.regionContainer {
  display: grid;
  width: 10rem;
  padding: 1rem;
  row-gap: 1rem;
  border-radius: 7px;
}

ul {
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
