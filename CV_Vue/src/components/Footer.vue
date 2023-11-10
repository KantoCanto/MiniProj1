<script setup></script>

<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <div class="footerDiv">
    <ul>
      <li>
        <a href="https://twitter.com/KantoCanto"
          ><i class="fab fa-x-twitter icon"></i
        ></a>
      </li>
      <li>
        <a href="mailto:dummie_email_123@gmail.com"
          ><i class="fa-regular fa-envelope icon"></i
        ></a>
      </li>
      <li>
        <a href="https://www.instagram.com/o_okanto/"
          ><i class="fab fa-instagram icon"></i
        ></a>
      </li>
      <li>
        <a href="https://github.com/KantoCanto"
          ><i class="fab fa-github icon"></i
        ></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bruno-canto-932501278/"
          ><i class="fab fa-linkedin icon"></i
        ></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  margin-top: 2rem;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-grid;
  grid-auto-flow: column;
  justify-items: center;
  grid-gap: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

a {
  color: antiquewhite;
}

a :hover {
  color: hsla(160, 100%, 37%, 1);
}
.icon {
  margin: 0;
  padding: 0;
}

@media (max-width: 500px) {
  ul {
    flex-direction: column;
    text-align: center;
  }
}
</style>
