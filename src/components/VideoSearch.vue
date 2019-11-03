<template>
  <form class="search" @submit.prevent>
    <input
      v-model="search"
      class="search__input"
      type="text"
      placeholder="Pesquisar"
      @keyup.enter="searchVideos"
    />
    <input class="search__button" type="button" value="Buscar" @click="searchVideos" />
  </form>
</template>

<script>
export default {
  name: "VideosSearch",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchVideos() {
      if (this.$route.query.search_query !== this.search) {
        this.$router.push({ query: { search_query: this.search } });
      }
    }
  }
};
</script>

<style scoped>
.search {
  display: grid;
}

.search__input {
  grid-area: 1/1;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.09)
    ),
    #121212;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.14);
  border: none;
  border-radius: 4px;
  padding: 15px 50px 15px 15px;
  width: 100%;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.search__input:hover {
  background: rgba(255, 255, 255, 0.04);
}

.search__input:focus {
  background: rgba(255, 255, 255, 0.12);
}

.search__button {
  grid-area: 1/1;
  width: 50px;
  justify-self: end;
  text-indent: -100px;
  border: none;
  background: transparent url("../assets/icon-search.svg") no-repeat center
    center;
  cursor: pointer;
}
</style>