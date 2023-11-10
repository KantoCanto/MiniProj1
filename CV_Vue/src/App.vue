<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app-container">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
html,
body,
#app-container {
  height: 100%;
}
#app-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 1.5rem;
}
</style>
