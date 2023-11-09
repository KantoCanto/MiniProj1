<script setup>
import { RouterLink, RouterView } from "vue-router";
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
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
