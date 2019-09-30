<template>
  <div class="no-results">
    <emoticon-sad-icon :size="48" class="no-results--icon icon-48" />
    <p>Não econtramos vídeos com o termo buscado.</p>
    <p>Utilize outras palavras-chaves.</p>
  </div>
</template>

<script>
import EmoticonSadIcon from 'vue-material-design-icons/EmoticonSad.vue'

export default {
  name: 'noResults',
  components: { EmoticonSadIcon },
}
</script>

<style>
.material-design-icon.icon-48 {
  height: 48px;
  width: 48px;
}

.material-design-icon.icon-48 > .material-design-icon__svg {
  height: inherit;
  width: inherit;
}

.no-results {
  text-align: center;
}

.no-results--icon {
  display: block;
  margin: 2rem;
}
</style>
