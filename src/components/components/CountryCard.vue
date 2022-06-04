<script setup lang="ts">
import { ref } from 'vue';

import { useTheme } from '#/stores/theme';
import { Country } from '#/utils/interfaces';

defineProps<{
  country: Country
}>();

const store = useTheme();
const theme = ref(store.theme);
store.$subscribe((_, state) => {
  theme.value = state.theme;
});
</script>

<template>
  <router-link :to="{ name: 'detail', params: { id: country.name.official }}">
    <div :class="['countryContainer', theme]">
      <img :src="country.flags.png" :alt="country.name.official" class="image">
      <div class="textContainer">
        <h1>{{ country.name.official }}</h1>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <p>Capital: {{ country.capital && country.capital[0] }}</p>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "#/styles/variables.scss";

.countryContainer {
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 2rem;
}

.image {
  height: 10rem;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.textContainer {
  padding: 1rem;
}

h1 {
  margin-bottom: 1.5rem;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

</style>
