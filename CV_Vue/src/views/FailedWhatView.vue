<script></script>

<template>
  <div class="wrapper">
    <div class="row1 col2">
      <div class="title"><h1 class="title">Programming</h1></div>
    </div>
    <div class="row2">
      <div class="col1"></div>
      <div class="col2"></div>
      <div class="col3"></div>
    </div>
    <div class="row3 col2">
      <div class="title"><h1 class="title">Photography</h1></div>
    </div>
    <div class="row4">
      <div class="col1"></div>
      <div class="col2"></div>
      <div class="col3"></div>
    </div>
    <div class="row5 col2">
      <div class="title"><h1 class="title">2D/3D Art</h1></div>
    </div>
    <div class="row6">
      <div class="col1">
        <img src="../assets/images/whatIdo/abstract_3d_pattern.png" />
        <p class="description">Abstract 2D Render</p>
      </div>
      <div class="col2">
        <img src="../assets/images/whatIdo/animacao.png" />
      </div>
      <div class="col3">
        <img src="../assets/images/whatIdo/pokeball_3d_model.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.1rem;
  grid-auto-rows: minmax(7rem, auto);
}

.row1 {
  grid-row: 1;
}
.row2 {
  grid-row: 2;
}
.row3 {
  grid-row: 3;
}
.row4 {
  grid-row: 4;
}
.row5 {
  grid-row: 5;
}
.row6 {
  grid-row: 6;
  display: flex;
}

.col1 {
  grid-column: 1/2;
}
.col2 {
  grid-column: 2/5;
}
.col3 {
  grid-column: 5/6;
}

.p {
  text-align: justify;
  text-align-last: left;
}
.title {
  text-align: center;
  font-size: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: antiquewhite;
}

.description {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.15em;
}

img {
  align-items: center;
  height: 8rem;
  width: 8rem;
  border-radius: 10%;
  object-fit: cover;
}
</style>
