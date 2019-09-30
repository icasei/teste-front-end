<template>
  <div class="loading">
    <div class="loading-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loadingApi',
}
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.loading-ripple div {
  position: absolute;
  border: 4px solid yellow;
  opacity: 1;
  border-radius: 50%;
  animation: loading-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.loading-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes loading-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 0.7;
    filter: hue-rotate(0);
  }

  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
    filter: hue-rotate(-360deg);
  }
}
</style>
