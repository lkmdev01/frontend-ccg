<template>
  <div
    id="colaboracoes"
    class="flex flex-col justify-center items-center px-5 py-20 bg-azul text-white"
  >
    <h2 class="text-3xl mb-2 font-semibold">{{ collaborationTitle }}</h2>
    <p class="max-w-2xl text-center">
      {{ collaborationText }}
    </p>
    <button class="btn text-amber-400 mt-5" @click="navigateToColaboracoes">
      Veja as formas de colaborar
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import axiosInstance from '@/services/axiosInstance';

interface Section {
  id: number;
  page_id: number;
  section_name: string;
  title: string;
  content: string;
}

const router = useRouter();
const collaborationTitle = ref('');
const collaborationText = ref('');

const fetchCollaborationData = async () => {
  try {
    const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_DEV_API_URL}/pages/home`);
    const sections: Section[] = response.data.sections;
    const collaborationSection = sections.find((section: Section) => section.section_name === 'colaboracao');
    if (collaborationSection) {
      collaborationTitle.value = collaborationSection.title;
      collaborationText.value = collaborationSection.content;
    } else {
      console.error("Seção de colaboração não encontrada");
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Erro ao buscar dados de colaborações:", error.response ? error.response.data : error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
};

const navigateToColaboracoes = () => {
  router.push('/colaboracoes');
};

onMounted(fetchCollaborationData);
</script>

<style scoped>
.bg-azul {
  background-image: url('/bg-colabora.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
