<template>
  <div id="app">
    <TheBody msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import TheBody from './components/TheBody.vue'

export default {
  name: 'app',
  components: {
    TheBody,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
