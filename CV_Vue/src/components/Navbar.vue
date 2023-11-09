<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="wrapper" id="responsiveNav">
      <div class="logo">
        <RouterLink to="/"
          ><img src="../assets/logo.png" alt="logo"
        /></RouterLink>
      </div>
      <div class="collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Me</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/what-i-do" class="nav-link">What I do</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/hobbies" class="nav-link">My Hobbies</RouterLink>
          </li>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.icon {
  display: none;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1rem 0 1rem;
}

img {
  height: 4rem;
  width: 4rem;
}

.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.collapse {
  display: flex;
}
.nav-link {
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  color: hsla(160, 100%, 37%, 1);
}

.nav-link :hover {
  color: antiquewhite;
}

@media (min-width: 500px) {
  ul {
    margin-left: auto;
  }
}
</style>
