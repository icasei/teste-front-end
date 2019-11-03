<template>
  <section>
    <transition>
      <div v-if="videos && videos.length" class="list">
        <VideoListItem v-for="video in videos" :key="video.id.videoId" :video="video" />
      </div>
      <VideoListNoResult v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import VideoListItem from "@/components/VideoListItem.vue";
import VideoListNoResult from "@/components/VideoListNoResult.vue";

export default {
  name: "VideoList",
  components: {
    VideoListItem,
    VideoListNoResult
  },
  data() {
    return {
      videos: null,
      nextPageToken: ""
    };
  },
  computed: {
    searchQuery() {
      return this.$route.query.search_query;
    }
  },
  watch: {
    searchQuery() {
      this.getVideos();
    }
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      this.videos = null;
      api
        .get(
          `/search?part=id,snippet&maxResults=6&type=video&q=${this.searchQuery}`
        )
        .then(response => {
          this.videos = response.data.items;
          this.nextPageToken = response.data.nextPageToken;
        });
    }
  }
};
</script>

<style scoped>
.list {
  margin: 170px auto 60px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1020px;
  grid-gap: 30px;
}

@media screen and (max-width: 1050px) {
  .list {
    max-width: 670px;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 700px) {
  .list {
    margin-top: 110px;
    max-width: 300px;
    grid-template-columns: 1fr;
  }
}
</style>