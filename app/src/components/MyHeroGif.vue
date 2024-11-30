<template class="bg-white">
  <div class="gif-container">
    <img :src="gifSrc" alt="GIF animado" class="carousel-image" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const gifSrc = ref('');

onMounted(() => {
  gifSrc.value = 'src/assets/background-gif.gif'; // Caminho do GIF animado
});
</script>

<style scoped>
.gif-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  background-color: #ffffff;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
