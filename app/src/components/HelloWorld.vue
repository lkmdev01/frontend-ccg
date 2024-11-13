<template>
  <div>
    <h1>Informações do Site</h1>
    <div v-if="siteInfo">
      <h2>{{ siteInfo.title }}</h2>
      <p>{{ siteInfo.description }}</p>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Definindo a interface para o tipo de siteInfo
interface SiteInfo {
  title: string;
  description: string;
}

const siteInfo = ref<SiteInfo | null>(null); // Usando a interface para o tipo

const fetchSiteInfo = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/site-info');
    siteInfo.value = response.data[0]; // Pega o primeiro item da lista
  } catch (error) {
    console.error('Erro ao buscar informações do site:', error);
  }
};

onMounted(() => {
  fetchSiteInfo();
});
</script>
