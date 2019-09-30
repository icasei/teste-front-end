<template>
  <div class="error">
    <alert-circle-outline-icon :size="60" class="error-icon icon-60" />
    <p class="error--message">Parece que o servidor está com algum problema.</p>
    <p class="error--message">Tente novamente em algums instantes.</p>
    <router-link :to="{ name: 'home' }">
      <span class="error--back-link">Clique aqui para voltar</span>
    </router-link>
  </div>
</template>

<script>
import AlertCircleOutlineIcon from 'vue-material-design-icons/AlertCircleOutline.vue'

export default {
  name: 'apiError',
  components: { AlertCircleOutlineIcon },
}
</script>

<style>
.material-design-icon.icon-60 {
  height: 60px;
  width: 60px;
}

.material-design-icon.icon-60 > .material-design-icon__svg {
  height: inherit;
  width: inherit;
}

.error {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.error-icon {
  margin: 3rem;
}

.error--back-link {
  font-size: 0.75rem;
  color: #ccc;
}
</style>
