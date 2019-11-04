<template>
  <div class="player">
    <iframe
      class="player__iframe"
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    videoId: String
  }
};
</script>

<style scoped>
.player {
  position: relative;
  padding-bottom: 56.25%;
}

.player__iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>