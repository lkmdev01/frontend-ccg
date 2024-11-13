<!-- src/layouts/DefaultLayout.vue -->
<script setup lang="ts">
import MyFooter from '../components/MyFooter.vue'
import MyHeader from '../components/MyHeader.vue'

</script>

<template>
  <MyHeader />
    <slot />
  <MyFooter />

</template>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
