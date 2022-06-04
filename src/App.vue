<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LayoutWrapper from '@/components/LayoutWrapper.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BodyWrapper from './components/BodyWrapper.vue';
import HomePage from './components/HomePage.vue';
</script>

<template>
  <LayoutWrapper>
    <HeaderComponent />
    <BodyWrapper>
      <HomePage />
    </BodyWrapper>
  </LayoutWrapper>
</template>

<style>
@font-face {
  font-family: "Nunito Sans";
  src: local('NunitoSans'), url(./assets/fonts/NunitoSans-Regular.ttf) format("truetype");
}
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-weight: 600;
}
#app {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
input {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
}
h1 {
  font-weight: 800;
}
</style>
