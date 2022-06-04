<script setup lang="ts">
import SearchBox from './SearchBox.vue';
import FilterButton from './FilterButton.vue';
</script>

<template>
  <div class="home">
    <SearchBox />
    <FilterButton />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
}
</style>
