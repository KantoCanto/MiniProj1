<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const navbarLinksRef = ref(null);

const toggleNavbar = () => {
  console.log("Toggle button clicked");
  if (navbarLinksRef.value) {
    navbarLinksRef.value.classList.toggle("active");
  }
};

const closeNavbar = () => {
  if (navbarLinksRef.value) {
    navbarLinksRef.value.classList.remove("active");
  }
};

onMounted(() => {
  navbarLinksRef.value = document.querySelector(".navbar-links");
});
</script>

<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <RouterLink to="/"
          ><img src="../assets/logo.png" alt="logo"
        /></RouterLink>
      </div>
      <a href="#" class="toggle-button" @click="toggleNavbar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links" @click="closeNavbar">
        <ul>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Me</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/what-i-do" class="nav-link">What I do</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/hobbies" class="nav-link">My Hobbies</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
nav {
  line-height: 1.3;
  font-family: Menlo, monospace;
}

.logo {
  margin: 0 0 1rem 0;
}

img {
  height: 4rem;
  width: 4rem;
}

.navbar-links ul {
  margin: 0;
  padding: 0;
  display: flex;
}
.navbar-links li {
  list-style: none;
  padding: 1rem;
  display: block;
}

.navbar-links li :hover {
  color: hsla(160, 100%, 37%, 1);
}
.nav-link {
  color: antiquewhite;
}

.toggle-button {
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.75rem;
}

.toggle-button .bar {
  height: 0.3rem;
  width: 100%;
  background-color: antiquewhite;
  border-radius: 1rem;
}

@media (max-width: 500px) {
  .toggle-button {
    display: flex;
  }
  .navbar-links {
    display: none;
  }
  .navbar-links.active {
    display: flex;
  }
  .navbar {
    flex-direction: row;
  }

  .navbar-links ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background-color: darkslategrey;
    z-index: 1;
  }
  .navbar-links li {
    text-align: center;
    padding: 1rem;
  }
}
</style>
