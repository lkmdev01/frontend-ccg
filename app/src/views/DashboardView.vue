<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard title="Users" :value="150">
        <template #icon>
          <svg class="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 18.364a9 9 0 1112.728 0M15 11a3 3 0 11-6 0" />
          </svg>
        </template>
      </DashboardCard>
      <DashboardCard title="Sales" :value="1200">
        <template #icon>
          <svg class="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h3m4 0h10M4 10a1 1 0 100 2h1m14-2h1a1 1 0 100-2h-2.38a1 1 0 00-.938.671L15.5 15" />
          </svg>
        </template>
      </DashboardCard>
      <DashboardCard title="Revenue" :value="revenue">
        <template #icon>
          <svg class="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM5.121 18.364a9 9 0 0112.728 0" />
          </svg>
        </template>
      </DashboardCard>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '../layouts/DashboardLayout.vue'
import DashboardCard from '../components/DashboardCards.vue'
import { ref } from 'vue';

const revenue = ref(5000); // Definindo a variável como reativa
</script>

<style scoped>
/* Estilos adicionais para a página principal do dashboard */
</style>
