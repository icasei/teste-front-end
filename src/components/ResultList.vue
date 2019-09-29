<template>
  <div class="results">
    <no-results v-if="totalResults === 0" />
    <div
      v-else
      v-for="(video, i) in resultList"
      :key="i"
      class="results__video"
    >
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
    <loading-api v-if="loading" />
  </div>
</template>

<script>
import NoResults from '@/components/NoResults'
import LoadingApi from '@/components/LoadingApi'
import { YOUTUBE_LIST_URL, API_KEY } from '@/utils/api'

export default {
  name: 'ResultList',
  components: { NoResults, LoadingApi },
  props: ['videoList', 'totalResults'],
  data() {
    return {
      resultList: this.videoList,
      bottom: false,
      nextPageToken: '',
      loading: false,
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) this.loadMore()
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    loadMore() {
      this.loading = true
      const maxResults = 10
      const params = {
        part: 'id,snippet',
        type: 'video',
        q: this.searchInput,
        maxResults,
        pageToken: this.nextPageToken,
        key: API_KEY,
      }
      this.$http
        .get(YOUTUBE_LIST_URL, { params })
        .then(res => {
          res.data.items.map(item => this.resultList.push(item))
          this.totalResults = res.data.pageInfo.totalResults
          this.nextPageToken = res.data.nextPageToken
        })
        .catch(() => this.$router.push('error'))
        .finally(() => (this.loading = false))
    },
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
