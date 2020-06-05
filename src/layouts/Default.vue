<template>
  <main>
    <slot />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');

body {
  font-family: 'Fira Code', monospace;
  margin: 0;
  padding: 0;
  font-size: larger;
  line-height: 35px;
}

main {
  max-width: 1024px;
  margin: 2rem auto;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
}

@media (max-width: 1024px) {
  main {
    margin: 0rem;
  }

  ul {
    padding-left: 0px;
    list-style: inside;
  }
}

.mb-0 {
  margin-bottom: 0rem;
}

.mt-0 {
  margin-top: 0rem;
}

.pad {
  padding: 2rem;
}

nav {
  padding: 2rem;
  background-color: aqua;
}

footer {
  text-align: center;
  background-color: aqua;
  padding: 2rem;
}

a:link {
  color: blue;
}

a:visited {
  color: blue;
}

a:hover {
  color: blue;
}

a:active {
  color: blue;
}

.heading {
  text-decoration: underline;
  text-decoration-thickness: 9px;
  text-decoration-color: blue;
}

.text-center {
  text-align: center;
}

code {
  color: white;
  background-color: crimson;
  padding: 4px;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

hr {
  color: lightblue;
}
</style>