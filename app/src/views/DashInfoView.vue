<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 gap-6 p-4">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Configurações do Site</h1>

      <!-- Informações de Texto -->
      <section class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Informações de Texto</h2>
        <div class="mb-4">
          <label for="siteTitle" class="block font-medium text-gray-700">Título do Site</label>
          <input
            type="text"
            id="siteTitle"
            v-model="siteInfo.site_title"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="Digite o título do site"
          />
        </div>
        <div class="mb-4">
          <label for="siteDescription" class="block font-medium text-gray-700">Descrição do Site</label>
          <textarea
            id="siteDescription"
            v-model="siteInfo.site_description"
            rows="4"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="Digite uma breve descrição do site"
          ></textarea>
        </div>
      </section>

      <!-- Informações de Imagem -->
      <section class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Informações de Imagem</h2>
        <div class="mb-4">
          <label for="siteLogo" class="block font-medium text-gray-700">Logotipo do Site</label>
          <input
            type="text"
            id="siteLogo"
            v-model="siteInfo.site_logo"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="URL da imagem do logotipo"
          />
        </div>
        <div class="mb-4">
          <label for="bannerImage" class="block font-medium text-gray-700">Imagem de Banner</label>
          <input
            type="text"
            id="bannerImage"
            v-model="siteInfo.banner_image"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="URL da imagem do banner"
          />
        </div>
      </section>

      <!-- Configurações de SEO -->
      <section class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Configurações de SEO</h2>
        <div class="mb-4">
          <label for="metaTitle" class="block font-medium text-gray-700">Título Meta</label>
          <input
            type="text"
            id="metaTitle"
            v-model="siteInfo.meta_title"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="Digite o título para SEO"
          />
        </div>
        <div class="mb-4">
          <label for="metaDescription" class="block font-medium text-gray-700">Descrição Meta</label>
          <textarea
            id="metaDescription"
            v-model="siteInfo.meta_description"
            rows="4"
            class="w-full border border-gray-300 bg-white rounded p-2 mt-1"
            placeholder="Digite a descrição para SEO"
          ></textarea>
        </div>
      </section>

      <button @click="updateSiteInfo" class="px-4 py-2 bg-blue-500 text-white rounded">Salvar Alterações</button>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DashboardLayout from '../layouts/DashboardLayout.vue';

const siteInfo = ref({
  site_title: '',
  site_description: '',
  site_logo: '',
  banner_image: '',
  meta_title: '',
  meta_description: ''
});

// Função para carregar informações do backend
async function loadSiteInfo() {
  try {
    const response = await axios.get('http://localhost:8000/api/site-info');
    siteInfo.value = response.data;
    console.log(response);
  } catch (error) {
    console.error('Erro ao carregar informações do site:', error);
  }
}

// Função para atualizar informações no backend
async function updateSiteInfo() {
  try {
    await axios.post('http://localhost:8000/api/site-info', siteInfo.value);
    alert('Informações atualizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar informações do site:', error);
  }
}

// Carregar informações do site ao montar o componente
onMounted(loadSiteInfo);
</script>

<style scoped>
/* Estilos adicionais para a página principal do dashboard */
.grid {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
