<template>
  <section class="no-result">
    <img class="no-result__image" src="@/assets/no-result.svg" alt="Busca Sem Resultado" />
    <h3 class="no-result__title">Não encontramos vídeos com o termo buscado.</h3>
    <p class="no-result__text">Utilize outras palavras-chave.</p>
  </section>
</template>

<script>
export default {
  name: "VideoListNoResult"
};
</script>

<style>
.no-result {
  margin: 140px 0 60px 0;
  padding: 0 15px;
}

.no-result__image {
  margin: 0 auto;
}

.no-result__title {
  color: #ffffff;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 5px;
}

.no-result__text {
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>