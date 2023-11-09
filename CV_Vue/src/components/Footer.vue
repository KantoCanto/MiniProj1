<script setup></script>

<template>
  <footer>
    <div>
      <ul>
        <li><a href="https://twitter.com/KantoCanto">Twitter</a></li>
        <li><a href="mailto:dummie_email_123@gmail.com">Email</a></li>
        <li><a href="https://www.instagram.com/o_okanto/">Instagram</a></li>
        <li><a href="https://github.com/KantoCanto">Github</a></li>
        <li>
          <a href="https://www.linkedin.com/in/bruno-canto-932501278/"
            >LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 2rem 0 2rem 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 2rem;
  justify-items: center;
}

@media (min-width: 500px) {
  ul {
    grid-auto-flow: column;
  }
}
@media (max-width: 500px) {
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}

a {
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
}

a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

div {
  line-height: 1.3;
  font-family: Menlo, monospace;
}
</style>
