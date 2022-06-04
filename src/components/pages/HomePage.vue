<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';

import SearchBox from '@/components/SearchBox.vue';
import FilterButton from '@/components/FilterButton.vue';
import { useCountries } from '#/stores/countries';
import CountryCard from '@/components/CountryCard.vue';

const store = useCountries();

onMounted(() => {
  axios.get('https://restcountries.com/v3.1/all')
    .then((res) => {
      store.$patch({
        countries: res.data,
      });
      console.log(store.countries);
    })
    .catch((err) => { throw err; });
});

</script>

<template>
  <div class="home">
    <SearchBox />
    <div class="filterButtonContainer">
      <FilterButton />
    </div>
    <div class="countriesContainer">
      <CountryCard
        v-for="country in store.countries?.slice(store.offset, store.itemsPerPage)"
        :key="country.name.official"
        :country="country"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
  position: relative;
}
.filterButtonContainer {
  position: absolute;
  top: 5rem;
}

.countriesContainer {
  margin-top: 4.5rem;
}
</style>
