declare module 'vue3-carousel' {
  import { DefineComponent } from 'vue'

  interface CarouselProps {
    items: unknown[] // ou defina um tipo específico para os itens, se souber
  }

  interface SlideProps {
    content: unknown // ou defina um tipo específico para o conteúdo, se souber
  }

  const Carousel: DefineComponent<CarouselProps>
  const Slide: DefineComponent<SlideProps>

  export { Carousel, Slide }
}
