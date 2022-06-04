<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import LayoutWrapper from '@/components/LayoutWrapper.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BodyWrapper from '@/components/BodyWrapper.vue';
</script>

<template>
  <LayoutWrapper>
    <HeaderComponent />
    <BodyWrapper>
      <router-view></router-view>
    </BodyWrapper>
  </LayoutWrapper>
</template>

<style lang="scss">
@import "#/styles/variables.scss";

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
  min-width: 100%;
  min-height: 100%;
}
input {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
}
h1 {
  font-size: larger;
  font-weight: 800;
}
h2 {
  font-size: medium;
  font-weight: 600;
}
a {
  color: inherit;
  text-decoration: none;
}

.dark {
  background: $darkBlue;
  box-shadow: 0 1px 7px -3px $darkestBlue;
}

.light {
  background: $white;
  box-shadow: 0 1px 7px -3px $darkGray;
}
</style>
