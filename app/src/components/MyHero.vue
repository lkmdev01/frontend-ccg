<template class="bg-white">
  <Carousel :items="visibleSlides" :autoplay="6000" :wrap-around="true">
    <Slide
      v-for="(slide, index) in visibleSlides"
      :key="index"
      :content="slide"
    >
      <div class="carousel__item">
        <!-- Verifica se é um vídeo -->
        <template v-if="slide.type === 'video'">
          <video
            :src="slide.src"
            autoplay
            loop
            muted
            playsinline
            class="carousel-video"
          ></video>
        </template>
        <!-- Caso contrário, exibe como imagem -->
        <template v-else>
          <div :style="{ backgroundImage: `url(${slide.src})` }">
            <img :src="slide.src" :alt="slide.alt" class="carousel-image" />
          </div>
        </template>
      </div>
    </Slide>
  </Carousel>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import loadSlides from '../utils/loadSlides';

// Define os slides com um campo adicional "type"
const slides = ref<{ src: string; alt: string; type: string }[]>([]); // Adicionado "type"
const screenWidth = ref(window.innerWidth);

const loadCarouselSlides = async () => {
  // Aqui, adicione os dados do tipo de mídia (imagem ou vídeo)
  slides.value = await loadSlides();
  console.log("Slides carregados:", slides.value);
};

const visibleSlides = computed(() => {
  const filteredSlides = screenWidth.value < 768
    ? slides.value.filter(slide => slide.src.includes('mobile'))
    : slides.value.filter(slide => slide.src.includes('desk'));

  console.log("Slides visíveis:", filteredSlides);
  return filteredSlides;
});

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
  console.log("Largura da tela:", screenWidth.value);
};

onMounted(() => {
  loadCarouselSlides();
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<style scoped>
.carousel {
  display: flex;
  width: 100%;
}

.carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-image {
  width: 100%;
  /* height: auto; */
  object-fit: cover;
}

.carousel-video {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
