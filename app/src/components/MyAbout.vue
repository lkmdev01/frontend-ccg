<template>
  <div
    id="sobre"
    class="flex flex-col md:flex-row justify-center items-center px-5 py-20 md:py-28 bg-white text-gray-900"
  >
    <!-- Imagem sobre nós -->
    <div class="img-sobre mb-6 md:mb-0 md:pr-10 flex justify-center md:block">
      <img
        src="/sobre.jpg"
        alt="Sobre"
        class="img-fluid rounded-md w-full"
        style="max-width: 500px"
      />
    </div>
    <!-- Texto sobre nós -->
    <div class="content-text text-center md:text-left">
      <h2 class="text-2xl mb-2 font-semibold">{{ aboutTitle }}</h2>
      <p class="max-w-md">
        {{ aboutText }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axiosInstance from '@/services/axiosInstance';

// Referências reativas para o título e o texto da seção "Sobre"
const aboutTitle = ref('');
const aboutText = ref('');

// Função para buscar os dados da seção "Sobre Nós" da API
const fetchAboutData = async () => {
  try {
    const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_DEV_API_URL}/pages/home`);
    const sections = response.data.sections; // Presumindo que as seções estão na propriedade 'sections'

    // Encontrando a seção "Sobre" (id 1)
    const aboutSection = sections.find((section: { id: number }) => section.id === 1);

    if (aboutSection) {
      aboutTitle.value = aboutSection.title; // Acessa o título da seção
      aboutText.value = aboutSection.content; // Acessa o conteúdo da seção
    }
  } catch (error) {
    console.error("Erro ao buscar dados da seção 'Sobre':", error);
  }
};

// Executa a função de busca ao montar o componente
onMounted(fetchAboutData);
</script>

<style scoped>
/* Personalizando a cor do fundo */
.bg-azul {
  background-color: #3d6090;
}

/* Estilo dos ícones */
i {
  font-size: 26px;
  color: #3d6090;
}

/* Responsividade */
</style>
