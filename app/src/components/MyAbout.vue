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
      <!-- Lista de ícones de redes sociais -->
      <ul class="flex justify-center md:justify-start space-x-4 mt-4">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-600"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-pink-500"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-400"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-700"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Referências reativas para o título e o texto da seção "Sobre"
const aboutTitle = ref('');
const aboutText = ref('');

// Função para buscar os dados da seção "Sobre Nós" da API
const fetchAboutData = async () => {
  try {
    const response = await axios.get('http://backend-ccg-production.up.railway.app/api/pages/home'); // URL correta
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
