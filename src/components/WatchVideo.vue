<template>
  <div>
    <loading-api v-if="loading" />
    <div v-else class="video">
      <div class="video__header">
        <div class="video--back-button">
          <arrow-left-icon class="" @click="$router.go(-1)" />
        </div>
        <h1 class="video__title">
          {{ video.snippet.title }}
        </h1>
      </div>
      <img
        :src="
          video.snippet.thumbnails.maxres
            ? video.snippet.thumbnails.maxres.url
            : video.snippet.thumbnails.standard.url
        "
        alt="Video thumbnail"
        class="video__player"
      />
      <div class="video__info">
        <span class="video__info--channel-name">
          {{ video.snippet.channelTitle }}
        </span>
        <div class="video__info--statistics">
          <div class="video__info--likes">
            <thumb-up-icon />
            <span>
              {{ video.statistics.likeCount | formatThousand }}
            </span>
          </div>
          <div class="video__info--dislikes">
            <thumb-down-icon />
            <span>
              {{ video.statistics.dislikeCount | formatThousand }}
            </span>
          </div>
        </div>
        <div class="video__info--description">
          <p
            :class="{
              'video__info--description--text': true,
              'video__info--description_show-more': showMore,
            }"
          >
            {{ video.snippet.description }}
          </p>
          <a class="video__info--button" @click="showMore = !showMore">
            <span v-if="!showMore">Ler mais</span>
            <span v-else>Ler menos</span>
          </a>
        </div>
        <p class="video__info--views">
          <eye-icon />
          {{ video.statistics.viewCount | formatThousand }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingApi from '@/components/LoadingApi'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import ThumbUpIcon from 'vue-material-design-icons/ThumbUp.vue'
import ThumbDownIcon from 'vue-material-design-icons/ThumbDown.vue'
import EyeIcon from 'vue-material-design-icons/Eye.vue'
import { YOUTUBE_VIDEO_URL, API_KEY } from '@/utils/api'

export default {
  name: 'WatchVIdeo',
  components: {
    LoadingApi,
    ArrowLeftIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    EyeIcon,
  },
  data() {
    return {
      video: null,
      showMore: false,
      loading: false,
    }
  },
  created() {
    this.getVideo()
  },
  activated() {
    this.getVideo()
  },
  methods: {
    getVideo() {
      this.loading = true
      const params = {
        id: this.$route.params.id,
        part: 'snippet,statistics',
        key: API_KEY,
      }
      this.$http
        .get(YOUTUBE_VIDEO_URL, { params })
        .then(result => {
          const [items] = result.data.items
          this.video = items
        })
        .catch(() => this.$router.push('error'))
        .finally(() => (this.loading = false))
    },
  },
}
</script>

<style>
.video {
  padding: 1rem;
}

.video__header {
  position: relative;
}

.video--back-button {
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 2px solid #777;
}

.video__title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
}

.video__player {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}

.video__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'channel-name statistics'
    'description description'
    'views .';
}

.video__info--likes {
  padding-right: 1rem;
}

.video__info--likes,
.video__info--dislikes {
  font-size: 0.8rem;
}

.video__info--channel-name {
  grid-area: 'channel-name';
  font-size: 0.8rem;
}

.video__info--statistics {
  grid-area: statistics;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.video__info--description {
  grid-area: description;
  position: relative;
  font-size: 0.75rem;
  padding: 1rem 0 2rem;
}

.video__info--description--text {
  display: block;
  height: 2rem;
  overflow: hidden;
}

.video__info--description_show-more {
  height: auto;
}

.video__info--button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
  background-color: #eee;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

.video__info--views {
  grid-area: views;
  padding: 1rem 0;
}

@media only screen and (min-width: 600px) {
  .video {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
