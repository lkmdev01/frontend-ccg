<template>
    <DefaultLayout>
      <div class="text-center pt-10 md:pt-28 py-8 bg-gray-100 px-2">
        <h1 class="text-4xl font-bold text-gray-800">Contribua</h1>
        <p class="text-gray-600">Home / Contribua</p>
        <p class="text-gray-600 max-w-xl font-semibold text-center mx-auto py-5">"Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."
          (2 Coríntios 9:7)</p>
      </div>
      <!-- Formas de Contribuir -->
      <div class="bg-white py-8 text-gray-500 px-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mycontainer">
          <div class="col-span-1">
            <h5 class="text-3xl font-bold">Formas de <br> Contribuir</h5>
          </div>
          <div class="col-span-1">
            <h5 class="text-xl font-bold">PIX</h5>
            <p>
              Contribua através da nossa chave pix: <br />
              email: celulahelenamaria@gmail.com
            </p>
          </div>
          <div class="col-span-1">
            <h5 class="text-xl font-bold">
              Presencialmente
            </h5>
            <p>
              Faça uma visita e contribua pessoalmente. <br />
              Rua Rafael Gonzalez, 523 - JD. Helena Maria, Guarujá - SP, 11431-070 -
              Brasil
            </p>
          </div>
        </div>
      </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
// import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
// import { Carousel, Slide } from 'vue3-carousel'
// import 'vue3-carousel/dist/carousel.css'

// import bgHero1 from '../assets/bg-hero-1.jpg'
// import bgHero2 from '../assets/bg-hero-2.jpg'
// import bgHero3 from '../assets/bg-hero-3.jpg'
// import bgHero4 from '../assets/bg-hero-4.jpg'

// const slidesDesktop = ref([
//   { src: bgHero1, alt: 'Image 1' },
//   { src: bgHero2, alt: 'Image 2' },
// ])

// const slidesMobile = ref([
//   { src: bgHero3, alt: 'Image 3' },
//   { src: bgHero4, alt: 'Image 4' },
// ])

// const screenWidth = ref(window.innerWidth)

// const visibleSlides = computed(() => {
//   return screenWidth.value < 768 ? slidesMobile.value : slidesDesktop.value
// })

// const updateScreenWidth = () => {
//   screenWidth.value = window.innerWidth
// }

// onMounted(() => {
//   window.addEventListener('resize', updateScreenWidth)
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', updateScreenWidth)
// })
</script>

<style scoped>
/* .carousel {
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

.carousel__item img {
  width: 100%;
  height: auto;
  object-fit: cover;
} */
</style>
