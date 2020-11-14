<template>
  <div class="container mb-3">
      <div class="d-flex mb-3">
            <div class="mr-auto">
                <h5>Pesquisas relacionadas a "{{reformattedSearchString}}"</h5>
            </div>
            <div class="btn-group ml-auto display-btn" role="group">
                <button
                    @click="changeDisplayMode('grid')"
                    type="button"
                    class="btn btn-outline-secondary"
                    v-bind:class="{ active: displayMode === 'grid' }"
                >
                    <i class="fas fa-th"></i>
                </button>
                <button 
                    @click="changeDisplayMode('list')"
                    type="button"
                    class="btn btn-outline-secondary"
                    v-bind:class="{ active: displayMode === 'list' }"
                >
                    <i class="fas fa-list"></i>
                </button>
          </div>
      </div>

      <div class="card-columns" v-if="displayMode === 'grid'">
          <div class="card" v-bind:key="video.id.videoId" v-for="video in videos">
              <VideoGridItem v-bind:video="video"></VideoGridItem>
          </div>
      </div>
      <div v-else>
          <div class="card mb-2" v-bind:key="video.id.videoId" v-for="video in videos">
              <VideoListItem v-bind:video="video"></VideoListItem>
          </div>
      </div>
  </div>
</template>

<script>
import VideoGridItem from './VideoGridItem';
import VideoListItem from './VideoListItem';

export default {
    name: 'SearchResults',
    components: {
        VideoListItem,
        VideoGridItem
    },
    data() {
        return {
            title: 'Search Results',
            displayMode: 'grid'
        };
    },
    methods: {
        changeDisplayMode(displayMode) {
            this.displayMode = displayMode;
        }
    },
    props: ['videos', 'reformattedSearchString']
}
</script>

<style scoped>
button:focus {
    box-shadow: none !important;
}

.display-btn {
    height: 50%;
}
</style>