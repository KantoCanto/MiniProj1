<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div id="app-container">
    <Navbar />
    <RouterView />
    <FooterVue />
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
}
#app-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
}
</style>
