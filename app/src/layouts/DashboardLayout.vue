<!-- DashboardLayout.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <DashSidebar />
    <div class="flex-1 flex flex-col">
      <DashNavbar />
      <main class="flex-1 p-6 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashSidebar from '../components/DashSideBar.vue'
import DashNavbar from '../components/DashNavbar.vue'
</script>

<style scoped>
/* Estilos adicionais para o layout, se necessário */
</style>
