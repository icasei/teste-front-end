<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* FONT ROBOTO */
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

/* RESET */
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
h3,
p {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Roboto", sans-serif;
  background: #121212;
}
</style>