<script></script>

<template>
  <div class="wrapper">
    <div class="one">
      <h1 class="title">About Me</h1>
    </div>
    <div class="two">
      <img src="../assets/images/foto_perfil.jpg" />
    </div>
    <div class="three">
      <p class="plain">You can call me Kanto</p>
      <p class="description">
        I'm a 24 year old who loves technology, cinema, food, and everything in
        between!
      </p>
    </div>
    <div class="four">
      <p class="plain">What happened so far</p>
      <p class="description">Hope you find something you like</p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.1rem;
  grid-auto-rows: minmax(7rem, auto);
  margin: 0 auto;
}

.one {
  grid-column: 1/6;
  grid-row: 1;
}
.two {
  grid-column: 1/ 1;
  grid-row: 2;
}
.three {
  grid-column: 2/6;
  grid-row: 2;
  padding-left: 2rem;
}
.four {
  grid-column: 1/5;
  grid-row: 3;
  margin-top: 4rem;
}
/* .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
} */

.title {
  text-align: center;
  font-size: 3em;
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: antiquewhite;
}

.plain {
  text-align: left;
  font-size: 1.5em;
  justify-content: center;
}

.description {
  text-align: left;
}

img {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 500px) {
}
</style>
