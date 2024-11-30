<!-- Sidebar.vue -->
<template>
  <aside class="w-64 bg-gray-800 text-white h-full">
    <div class="p-4 text-center font-bold text-lg">Dashboard</div>
    <nav>
      <ul class="space-y-2">
        <li><router-link to="/dashboard/overview" class="block py-2 px-4 hover:bg-gray-700">Overview</router-link></li>
        <li><router-link to="/dashboard/analytics" class="block py-2 px-4 hover:bg-gray-700">Analytics</router-link></li>
        <li><router-link to="/dashboard/info" class="block py-2 px-4 hover:bg-gray-700">Info Site</router-link></li>
        <li><router-link to="/dashboard/settings" class="block py-2 px-4 hover:bg-gray-700">Settings</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
// Importações e lógica, se necessário
</script>

<style scoped>
/* Estilos personalizados para o sidebar */
</style>
