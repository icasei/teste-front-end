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
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");

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

a {
  text-decoration: none;
  color: #40c4ff;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
/* TRANSITION */
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

.v-ender-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>