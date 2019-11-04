<template>
  <section class="video" v-if="video">
    <div class="video__header">
      <button class="video__back" @click="$router.go(-1)">Voltar</button>
      <h1 class="video__title">{{video.title}}</h1>
    </div>
    <VideoPlayer :video-id="id" />
    <VideoInfo :video="video" />
    <VideoDescription :description="video.description" />
  </section>
</template>

<script>
import { api } from "@/services.js";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoInfo from "@/components/VideoInfo.vue";
import VideoDescription from "@/components/VideoDescription.vue";

export default {
  name: "Detail",
  components: {
    VideoPlayer,
    VideoInfo,
    VideoDescription
  },
  props: {
    id: String
  },
  data() {
    return {
      video: null
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      api
        .get(`/videos?id=${this.id}&part=snippet,statistics`)
        .then(response => {
          const item = response.data.items[0];
          this.video = {
            like: item.statistics.likeCount,
            dislike: item.statistics.dislikeCount,
            views: item.statistics.viewCount,
            title: item.snippet.title,
            description: item.snippet.description,
            channelTitle: item.snippet.channelTitle,
            channelId: item.snippet.channelId
          };
        });
    }
  }
};
</script>

<style scoped>
.video {
  max-width: 960px;
  margin: 60px auto;
  padding: 0 15px;
  color: #fff;
}

.video__header {
  display: flex;
  margin-bottom: 20px;
}

.video__back {
  text-indent: -150px;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent url("../assets/icon-arrow.svg") no-repeat center
    center;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
}

.video__back:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.video__title {
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
  margin-left: 15px;
}

@media screen and (max-width: 700px) {
  .video {
    margin: 15px auto;
  }
  .video__title {
    font-size: 1.125rem;
  }
}
</style>