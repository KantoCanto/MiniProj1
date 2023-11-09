<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="logo">
        <RouterLink to="/"
          ><img src="../assets/logo.png" alt="logo"
        /></RouterLink>
      </div>
      <div class="items">
        <ul>
          <RouterLink to="about"><li>About Me</li></RouterLink>
          <RouterLink to="what-i-do"><li>What I Do</li></RouterLink>
          <RouterLink to="hobbies"><li>My Hobbies</li></RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 1rem 0 1rem;
}

nav {
  color: antiquewhite;
}

img {
  height: 4rem;
  width: 4rem;
}
</style>
