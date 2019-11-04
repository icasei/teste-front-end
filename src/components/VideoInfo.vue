<template>
  <div class="info">
    <a
      class="info__channel-title"
      :href="`https://www.youtube.com/channel/${video.channelId}`"
      target="_blank"
    >{{video.channelTitle}}</a>
    <div class="info__statistics">
      <span class="info__views">{{video.views}}</span>
      <span class="info__like">{{video.like}}</span>
      <span class="info__dislike">{{video.dislike}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoInfo",
  props: {
    video: Object
  }
};
</script>

<style scoped>
.info {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 20px;
}

@media screen and (max-width: 500px) {
  .info {
    flex-direction: column;
  }
  .info__statistics {
    margin-top: 10px;
  }
}

.info__channel-title {
  font-size: 1.125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}

.info__like,
.info__dislike,
.info__views {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  padding-left: 34px;
  line-height: 1.8;
}

.info__like {
  margin-left: 15px;
  background: url("../assets/icon-like.svg") no-repeat center left;
}
.info__dislike {
  margin-left: 15px;
  background: url("../assets/icon-dislike.svg") no-repeat center left;
}
.info__views {
  background: url("../assets/icon-views.svg") no-repeat center left;
}
</style>