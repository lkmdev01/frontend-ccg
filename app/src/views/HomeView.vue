<script setup lang="ts">
// import MyHero from '../components/MyHero.vue'
import MyHeroGif from '../components/MyHeroGif.vue'
import MyAbout from '../components/MyAbout.vue'
import MySchedules from '../components/MySchedules.vue'
import MyGallery from '../components/MyGallery.vue'
import MyCollaboration from '../components/MyCollaboration.vue'
import MyCTA from '../components/MyCTA.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
// import HelloWorld from '../components/HelloWorld.vue'
// import ControlPages from '@/components/ControlPages.vue'
</script>

<template>
  <main>
    <DefaultLayout>
      <!-- <MyHero></MyHero> -->
      <MyHeroGif></MyHeroGif>
      <MyAbout></MyAbout>
      <MySchedules></MySchedules>
      <MyGallery></MyGallery>
      <MyCollaboration></MyCollaboration>
      <MyCTA></MyCTA>
      <!-- <ControlPages></ControlPages> -->
    </DefaultLayout>
  </main>
</template>
