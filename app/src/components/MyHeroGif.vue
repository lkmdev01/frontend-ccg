<template class="bg-white">
  <div class="video-container">
    <video
      :src="videoSrc"
      autoplay
      loop
      muted
      playsinline
      class="carousel-video"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const videoSrc = ref('');

onMounted(() => {
  videoSrc.value = '/header.mp4'; // Caminho do vídeo
});
</script>

<style scoped>
.video-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  background-color: #ffffff;
}

.carousel-video {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
