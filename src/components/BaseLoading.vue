<template>
  <div class="material-spinner"></div>
</template>

<script>
export default {
  name: "BaseLoading"
};
</script>

<style scoped>
.material-spinner {
  display: block;
  margin: 30px auto;
  height: 50px;
  min-height: 50px;
  width: 50px;
  border-radius: 100px;
  border: 5px transparent solid;
  border-top: 5px #40c4ff solid;
  animation: material-spinner 4s infinite;
}

@keyframes material-spinner {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(720deg);
  }
  75% {
    transform: rotate(1080deg);
  }
  100% {
    transform: rotate(1440deg);
  }
}
</style>