<script></script>

<template>
  <div class="wrapper">
    <div class="row1 col2">
      <div class="title"><h1>Programming</h1></div>
    </div>
    <div class="row2">
      <div class="col1"></div>
      <div class="col2"></div>
      <div class="col3"></div>
    </div>
    <div class="row3 col2">
      <div class="title"><h1>Photography</h1></div>
    </div>
    <div class="row4">
      <div class="col1"></div>
      <div class="col2"></div>
      <div class="col3"></div>
    </div>
    <div class="row5 col2">
      <div class="title"><h1>Animation</h1></div>
    </div>
    <div class="row6">
      <div class="col1"></div>
      <div class="col2"></div>
      <div class="col3"></div>
    </div>
  </div>
</template>

<style>
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
}

.col1 {
  grid-column: 1/2;
}
.col2 {
  grid-column: 3/4;
}
.col3 {
  grid-column: 5/6;
}

.title {
  text-align: center;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
}
h1 {
  font-size: 1.75rem;
  color: antiquewhite;
}
</style>
