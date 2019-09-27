<template>
  <div class="video">
    <arrow-left-box-icon />
    <h1 class="video__title">
      {{ video.snippet.title }}
    </h1>
    <img
      :src="video.snippet.thumbnails.maxres.url"
      alt=""
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
      <p class="video__info--description">
        {{ video.snippet.description }}
      </p>
      <p class="video__info--views">
        <eye-icon />
        {{ video.statistics.viewCount | formatThousand }}
      </p>
    </div>
  </div>
</template>

<script>
import ArrowLeftBoxIcon from 'vue-material-design-icons/ArrowLeftBox.vue'
import ThumbUpIcon from 'vue-material-design-icons/ThumbUp.vue'
import ThumbDownIcon from 'vue-material-design-icons/ThumbDown.vue'
import EyeIcon from 'vue-material-design-icons/Eye.vue'

export default {
  name: 'WatchVIdeo',
  components: {
    ArrowLeftBoxIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    EyeIcon,
  },
  data() {
    return {
      video: null,
    }
  },
  created() {
    console.log('created')
    this.getVideo()
  },
  methods: {
    getVideo() {
      const API_KEY = 'AIzaSyBFc4O83TP3ofYcNYDVG-3vdf9HGQVkmPQ'
      const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/videos'
      const params = {
        id: this.$route.params.id,
        part: 'snippet,statistics',
        key: API_KEY,
      }
      this.$http
        .get(YOUTUBE_URL, { params })
        .then(result => {
          const [items] = result.data.items
          this.video = items
          console.log('desc', items)
        })
        .catch(err => {})
    },
  },
}
</script>

<style>
.video {
  padding: 1rem;
}

.video__title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
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
  font-size: 0.75rem;
  padding: 1rem 0;
}

.video__info--views {
  grid-area: views;
}
</style>
