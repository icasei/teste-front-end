<template>
  <div>
    <p
      v-if="showMore || !resumeDescription"
      class="description__text"
      v-html="descriptionLineBreakHTML"
    ></p>
    <p v-else class="description__text" v-html="resumeDescription"></p>
    <button
      v-if="resumeDescription"
      class="description__button"
      @click="showMore = !showMore"
    >{{showMore ? 'Mostar menos' : 'Mostar mais'}}</button>
  </div>
</template>

<script>
export default {
  name: "VideoDescription",
  props: {
    description: String
  },
  data() {
    return {
      showMore: false
    };
  },
  computed: {
    descriptionWithLinkHTML() {
      const urlRegex = /https?:\/\/[^\s]+/g;
      return this.description.replace(
        urlRegex,
        url => `<a href="${url}" target="_blank">${url}</a>`
      );
    },
    descriptionLineBreakHTML() {
      return this.descriptionWithLinkHTML.replace(
        /\n/g,
        lineBreak => "<br>" + lineBreak
      );
    },
    resumeDescription() {
      const arrayLine = this.descriptionLineBreakHTML.split("<br>");
      if (arrayLine.length === 3) return "";

      const resumeArrayLine = arrayLine.splice(0, 3);
      return resumeArrayLine.join("<br>");
    }
  }
};
</script>

<style scoped>
.description__text {
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 20px;
  max-width: 750px;
  overflow-x: auto;
}

.description__button {
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  padding: 5px 0;
  cursor: pointer;
  background: none;
  color: rgba(255, 255, 255, 0.6);
}
</style>