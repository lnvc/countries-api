<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '@/stores/theme';
import { REGIONS } from '@/utils/constants';

const store = useTheme();
const theme = ref(store.theme);
const isExpanded = ref(false);
store.$subscribe((_, state) => {
  theme.value = state.theme;
});

const handleDropdownClick = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="container">
    <div :class="['filterButton', theme]" @click="handleDropdownClick">
      <span>Filter by Region</span>
      <ion-icon v-if="isExpanded" name="chevron-up"></ion-icon>
      <ion-icon v-else name="chevron-down"></ion-icon>
    </div>
    <div v-if="isExpanded" :class="['regionContainer', theme]">
      <ul v-for="region in REGIONS" :key="region">
        {{ region }}
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.container {
  display: grid;
  row-gap: 0.4rem;
}
.filterButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  padding: 1rem;
  border-radius: 7px;
  cursor: pointer;
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

.dark {
  background: $darkBlue;
  box-shadow: 0 1px 3px $darkestBlue;
}

.light {
  background: $white;
  box-shadow: 0 1px 3px $darkGray;
}
</style>
