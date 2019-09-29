<template>
  <div class="content">
    <div
      :class="{
        'content__search-bar-wrapper': true,
        'content__search-bar_small': resultList.length,
      }"
    >
      <div class="content__search-bar">
        <input
          v-model="searchInput"
          id="search_input"
          type="text"
          name="search"
          class="content__search-bar--input"
          placeholder=" "
          @keypress.enter="getResults"
        />
        <label for="search_input" class="content__search-bar--label">
          Pesquisar
        </label>
        <label for="search_input" class="content__search-bar--info">
          Pressione &lt;Enter&gt; para buscar
        </label>
        <magnify-icon class="content__search-bar--magnify" />
      </div>
    </div>
    <loading-api v-if="loading" />
    <result-list
      v-else
      :video-list="resultList"
      :total-results="totalResults"
    />
  </div>
</template>

<script>
import LoadingApi from '@/components/LoadingApi'
import ResultList from '@/components/ResultList'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import { YOUTUBE_LIST_URL, API_KEY } from '@/utils/api'

export default {
  name: 'TheBody',
  components: { LoadingApi, ResultList, MagnifyIcon },
  data() {
    return {
      searchInput: '',
      resultList: [],
      totalResults: null,
      nextPageToken: '',
      loading: false,
      bottom: false,
    }
  },
  methods: {
    getResults() {
      this.loading = true
      const maxResults = 10
      const params = {
        part: 'id,snippet',
        type: 'video',
        q: this.searchInput,
        maxResults,
        key: API_KEY,
      }
      this.$http
        .get(YOUTUBE_LIST_URL, { params })
        .then(res => {
          this.resultList = res.data.items
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
.content {
  padding: 1rem;
}

.content__search-bar-wrapper {
  overflow: hidden;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content__search-bar_small {
  height: auto;
}

.content__search-bar {
  position: relative;
}

.content__search-bar--label {
  display: block;
  position: absolute;
  font-size: 0.75rem;
  transform: translateY(8px);
  top: 0;
  transition: all 0.4s;
}

.content__search-bar--info {
  font-size: 0.7rem;
  color: #ccc;
  transition: all 0.4s;
  opacity: 0;
}

.content__search-bar--magnify {
  position: absolute;
  right: 0;
  top: 25px;
  z-index: -1;
}

.content__search-bar--input {
  font-family: inherit;
  appearance: none;
  background: transparent;
  border: 0;
  color: #333;
  display: block;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  outline: 0;
}

.content__search-bar--input:placeholder-shown ~ .content__search-bar--label {
  font-size: 1.2rem;
  transform: translateY(25px);
}

.content__search-bar--input:focus ~ .content__search-bar--label {
  font-size: 0.75rem;
  transform: translateY(8px);
  color: #999;
}

.content__search-bar--input:focus ~ .content__search-bar--info {
  opacity: 1;
}

.content__search-bar--input:focus {
  border-bottom: 1px solid #333;
}
</style>
