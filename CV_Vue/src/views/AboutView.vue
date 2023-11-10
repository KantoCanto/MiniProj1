<script></script>

<template>
  <div class="wrapper">
    <div class="one">
      <h1 class="title">About Me</h1>
    </div>
    <div class="two">
      <div class="picture">
        <img src="../assets/images/foto_perfil.jpg" />
      </div>
      <div class="text">
        <p class="plain">You can call me Kanto</p>
        <p class="description">
          I'm a 24 year old who loves technology, cinema, food, and everything
          in between!
        </p>
      </div>
    </div>
    <div class="three">
      <p class="subtitle">What happened so far</p>
      <ul>
        <p>
          Ever since I was a kid, I've had interest in techonology as a hole.<br />Video
          Games were a very big part of my childhood, and they are still present
          in my day-to-day life.<br />
          Watching movies, shows, anime and listening to music, were also ways
          I'd spend my free time.<br />
          Those were some of the reasons why I ended up enrolling in a
          Bachelor's Degree in Communication and Multimedia, where I got the
          chance to work on various areas such as Photography, Design and web
          Development.
          <br />For my curricular intership, I stayed at a Virtual Reality
          Laboratory, where I got the chance to familiarize myself with that
          technology. <br />
          Not feeling ready to end my academic studies and join the working
          life, I decided to take on the challenge of getting a Master's Degree.
          Following the area I'd spent my last 3 years, I enroled in Multimedia
          Technologies.<br />
          The first year was very eventful, and I even dabbled on Animation, an
          area that had always fascinated me.<br />
          This brings us to the present, where I finally chose what to persue as
          a carrier. Here begins my journey as a <strong>Web Developer</strong>.
        </p>
      </ul>
    </div>
    <div class="four">
      <p class="subtitle">Academic Accomplishments</p>
      <ul>
        <li>2016 -> English Level C2</li>
        <li>
          2019 - 2022 -> Bachelor's Degree in Communication and Multimedia
        </li>
        <li>2022 - Present -> Master's Degree in Multimedia Technologies</li>
      </ul>
    </div>
    <div class="five">
      <p class="subtitle">Work Experience</p>
      <ul>
        <li>
          March 2022 to July 2022
          <p>VR DEVELOPER</p>
          <p>Laboratório de Realidade Virtual - MASSIVE, Vila Real</p>
        </li>
      </ul>
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
.two .text {
  grid-column: 3/5;
  grid-row: 2;
}

.three {
  grid-column: 2/5;
  grid-row: 3;
}
.four {
  grid-column: 2/4;
  grid-row: 4;
}

.five {
  grid-column: 2/4;
  grid-row: 5;
}
/* .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
} */

.p {
  text-align: justify;
  text-align-last: left;
}
.title {
  text-align: center;
  font-size: 3em;
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: antiquewhite;
}
.subtitle {
  text-align: left;
  font-size: 1.5em;
  justify-content: center;
  margin-top: 3rem;
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
  border-radius: 50%;
  object-fit: cover;
}

ul {
  margin: 1rem 0 1rem 0;
}
li {
  list-style: none;
}
@media (max-width: 500px) {
}
</style>
