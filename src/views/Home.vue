<template>
  <div class="seach seach--middle-screen">
    <VideoSearch />
  </div>
</template>

<script>
import VideoSearch from "@/components/VideoSearch.vue";

export default {
  name: "Home",
  components: {
    VideoSearch
  }
};
</script>

<style scoped>
.seach {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 642px;
  max-width: 100%;
  padding: 0 15px;
  transition: top 0.3s;
}

.seach--middle-screen {
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>