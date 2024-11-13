<!-- DashboardCard.vue -->
<template>
  <div class="bg-white p-6 rounded shadow-md flex items-center space-x-4">
    <div class="p-4 bg-blue-100 rounded-full">
      <slot name="icon" />
    </div>
    <div>
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <p class="text-gray-700">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Definindo os props title e value para uso no template
// Não é necessário definir `props`, apenas utilizar `defineProps` diretamente sem atribuí-lo a uma variável.
defineProps<{
  title: string
  value: string | number
}>()

</script>

<style scoped>
/* Estilos adicionais para os cartões */
</style>
