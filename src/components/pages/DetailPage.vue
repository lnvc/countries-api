<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

import { useCountries } from '#/stores/countries';
import { Country } from '#/utils/interfaces';

const route = useRoute();
const store = useCountries();
const country: Ref<Country | null | undefined> = ref(null);

onMounted(() => {
  if (store.countries?.length) {
    // fetch from store
    country.value = store.countries.find(
      (item: Country) => item.name.official === route.params.id,
    );
  } else {
    // fetch from api
    axios.get(`https://restcountries.com/v3.1/name/${route.params.id}?fullText=true`)
      .then((res) => {
        country.value = res?.data && res?.data.length && res.data[0];
      })
      .catch((err) => { throw err; });
  }
});

</script>

<template>
  <div :class="['countryContainer']">
    <img :src="country?.flags.png" :alt="country?.name.official" class="image">
    <div class="textContainer">
      <h1>{{ country?.name.official }}</h1>
      <p>Population: {{ country?.population }}</p>
      <p>Region: {{ country?.region }}</p>
      <p>Capital: {{ country?.capital && country?.capital[0] }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
