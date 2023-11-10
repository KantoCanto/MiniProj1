<script></script>

<template>
  <div class="wrapper">
    <div class="one">
      <h1 class="title">My Hobbies</h1>
    </div>
    <div class="two">
      <div class="hobby">
        <img src="../assets/images/hobbies/camera-outline.svg" />
        <p>Photography</p>
      </div>
      <div class="hobby">
        <img src="../assets/images/hobbies/basketball-outline.svg" />
        <p>Basketball</p>
      </div>
      <div class="hobby">
        <img src="../assets/images/hobbies/game-controller-outline.svg" />
        <p>Gaming</p>
      </div>
    </div>
    <div class="three">
      <div class="hobby">
        <img src="../assets/images/hobbies/musical-notes-outline.svg" />
        <p>Music</p>
      </div>
      <div class="hobby">
        <img src="../assets/images/hobbies/library-outline.svg" />
        <p>Reading</p>
      </div>
      <div class="hobby">
        <img src="../assets/images/hobbies/pencil-outline.svg" />
        <p>Drawing</p>
      </div>
    </div>

    <div class="four"></div>
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

.hobby {
  text-align: center;
  margin: 1rem;
}

.one {
  grid-column: 1/6;
  grid-row: 1;
}
.two {
  grid-column: 1/3;
  grid-row: 2;
}
.two .picture {
  grid-column: 2/3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.two .subtitle {
  text-align: center;
}
.two .text {
  grid-column: 3/5;
  grid-row: 2;
}

.three {
  grid-column: 4/6;
  grid-row: 2;
}
.three .subtitle {
  text-align: center;
}
.three .picture {
  grid-column: 2/3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.title {
  text-align: center;
  font-size: 3em;
  margin-top: 2rem;
  color: antiquewhite;
}

img {
  height: 6rem;
  width: 6rem;
  border-radius: 5%;
  object-fit: cover;
  margin-left: 0.5rem;
}

ul {
  margin: 2rem 0 1rem 0;
}
li {
  list-style: none;
}
</style>
