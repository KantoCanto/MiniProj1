<script setup></script>

<template>
  <div class="container">
    <h1 class="title">Greetings!</h1>
    <p class="subtitle">I see you made it to my website</p>
    <p>Hope you find something you like</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

.title {
  margin-top: 20vh;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1rem;
  color: antiquewhite;
}

.subtitle {
  text-align: center;
  font-size: 1.5em;
}

@media (max-width: 500px) {
}
</style>
