<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="one">
      <h1 class="title">Here are some of my Projects</h1>
    </div>
   <div class="two">
      <p class="subtitle">Programming</p>
      <div class="picture">
        <img src="../assets/images/whatIdo/vr.png" />
        <img src="../assets/images/whatIdo/bookscore.png">
        <img src="../assets/images/whatIdo/lostrune.png" />
      </div>
      <p>
        <ul>
            <p>
                Experiência de Realidade Virtual - Mini Puzzle<br>
                Aplicação CRUD para registo de livros<br>
                The Lost Rune - Jogo 2D feito no Unity
            </p>
        </ul>
      </p>
    </div>
    <div class="three">
      <p class="subtitle">Photography</p>
      <div class="picture">
        <img src="../assets/images/whatIdo/1.jpg" />
        <img src="../assets/images/whatIdo/2.jpg" />
        <img src="../assets/images/whatIdo/3.jpg" />
      </div>
    </div>
    <div class="four">
      <p class="subtitle">2D/3D Art</p>
      <div class="picture">
        <img src="../assets/images/whatIdo/abstract_3d_pattern.png" />
        <img src="../assets/images/whatIdo/animacao.png" />
        <img src="../assets/images/whatIdo/pokeball_3d_model.png" />
      </div>
      <p>
        <ul>
            <p>
               Padrão modular abstrato feito no Blender<br>
                Animação 2D feita no Clip Studio Paint<br>
                Animação 3D feita no Blender
            </p>
        </ul>
      </p>
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
  grid-column: 2/5;
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
  grid-column: 2/5;
  grid-row: 3;
}
.three .subtitle{
    text-align: center;
}
.three .picture{
    grid-column: 2/3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.four {
  grid-column: 2/5;
  grid-row: 4;
}

.four .subtitle{
    text-align: center;
}
.four .picture{
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
.subtitle {
  text-align: left;
  font-size: 1.5em;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: antiquewhite;
}
.plain {
  text-align: center;
  font-size: 1.5em;
  justify-content: center;
}

.description {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.15em;
}

img {
  height: 8rem;
  width: 8rem;
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
@media (max-width: 500px) {
}
</style>
