<template>
  <div>
    <div class="search" :class="{ 'search--middle-screen': !hasSearchQuery  }">
      <VideoSearch />
    </div>
    <VideoList v-if="hasSearchQuery" />
  </div>
</template>

<script>
import VideoSearch from "@/components/VideoSearch.vue";
import VideoList from "@/components/VideoList.vue";

export default {
  name: "Home",
  components: {
    VideoSearch,
    VideoList
  },
  computed: {
    hasSearchQuery() {
      return !!this.$route.query.search_query;
    }
  }
};
</script>

<style scoped>
.search {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 642px;
  max-width: 100%;
  padding: 0 15px;
  transition: top 0.3s;
}
@media screen and (max-width: 700px) {
  .search {
    top: 15px;
  }
}

.search--middle-screen {
  top: 40%;
  transform: translate3d(-50%, -50%, 0);
}
</style>