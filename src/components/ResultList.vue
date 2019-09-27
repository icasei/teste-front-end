<template>
  <div class="results">
    <div v-for="(video, i) in videoList" :key="i" class="results__video">
      <router-link
        :to="{ name: 'watchVideo', params: { id: video.id.videoId } }"
      >
        <div class="results__video--thumb">
          <img
            :src="video.snippet.thumbnails.high.url"
            alt="Capa do vídeo"
            class="results__video--thumb"
          />
        </div>
        <div class="results__video__info">
          <span class="r__video__info--title">
            {{ video.snippet.title }}
          </span>
          <span class="r__video__info--channel-name">
            {{ video.snippet.channelTitle }}
          </span>
          <span class="r__video__info--description">
            {{ video.snippet.description }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultList',
  props: ['videoList'],
  data() {
    return {
      searchResults: null,
    }
  },
}
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
}

.results__video {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1rem;
}

.results__video--thumb {
  width: 100%;
}

.results__video__info {
  display: flex;
  flex-direction: column;
}

.r__video__info--title {
  font-weight: 700;
  margin: 0.5rem 0;
}

.r__video__info--channel-name,
.r__video__info--description {
  font-size: 0.8rem;
  margin: 0.5rem 0;
}

@media only screen and (min-width: 600px) {
  .results {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .results__video {
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .results__video {
    width: 33%;
  }
}

@media only screen and (min-width: 1440px) {
  .results__video {
    width: 20%;
  }
}
</style>
