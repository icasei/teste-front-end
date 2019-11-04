<template>
  <router-link :to="{name: 'detail', params: {id: video.id.videoId}}" tag="article" class="video">
    <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title" class="video__image" />
    <div class="video__info">
      <h1 class="video__title">{{video.snippet.title}}</h1>
      <p class="video__text">{{video.snippet.channelTitle}}</p>
      <p class="video__text">{{video.snippet.description}}</p>
    </div>
    <button class="video__button">Detalhe do vídeo</button>
  </router-link>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  }
};
</script>

<style scoped>
.video {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    #121212;
  /* 01 dp */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  cursor: pointer;
  display: grid;
}

.video:hover {
  background: rgba(255, 255, 255, 0.12);
}

.video__image {
  border-radius: 4px 4px 0 0;
}

.video__info {
  padding: 15px;
}

.video__title {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2px;
}

.video__text {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
  font-size: 0.875rem;
  overflow: hidden;
  width: 290px;
  max-width: 100%;
}
@media screen and (max-width: 700px) {
  .video__text {
    width: 270px;
  }
}

.video__button {
  color: #40c4ff;
  background: none;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  align-self: end;
  justify-self: start;
}
</style>