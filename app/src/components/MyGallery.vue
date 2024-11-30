<template>
  <div class="carousel-wrapper p-5 py-16 md:py-20 bg-white">
    <!-- Carrossel principal com autoplay e wrap-around -->
    <Carousel
      :items="slides"
      :autoplay="2000"
      :wrap-around="true"
      v-model="currentSlide"
      class="carousel-main"
    >
      <Slide v-for="slide in slides" :key="slide.id" :content="slide">
        <div
          class="carousel__item"
          :style="{ backgroundImage: `url(${slide.src})` }"
        >
          <img :src="slide.src" :alt="slide.alt" class="carousel-image" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Importando as imagens do slide
import img1 from '../assets/slide-gallery/img2.jpg'
import img2 from '../assets/slide-gallery/img3.jpg'
import img3 from '../assets/slide-gallery/img4.jpg'
import img4 from '../assets/slide-gallery/img5.jpg'

// Definindo a lista de slides e a slide atual
const currentSlide = ref(0)
const slides = [
  { id: 1, src: img1, alt: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2' },
  { id: 3, src: img3, alt: 'Image 3' },
  { id: 4, src: img4, alt: 'Image 4' },
]
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-main {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.carousel__item {
  min-height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.carousel-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
