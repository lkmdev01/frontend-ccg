<template>
  <footer class="footer footer-center bg-azul text-gray-100 rounded p-10">
    <nav class="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
      <a class="link link-hover" @click.prevent="navigateToSection('#sobre')">Quem Somos</a>
      <a class="link link-hover" @click.prevent="navigateToSection('#programacao')">Programação</a>
      <a class="link link-hover" @click.prevent="navigateToSection('#colaboracoes')">Colaborações</a>
    </nav>
    <nav class="flex justify-center mt-4 sm:mt-0">
      <div class="flex gap-4">
        <a href="https://wa.me/5513974089412" target="_blank">
          <i class="fa-brands fa-whatsapp" style="font-size: 24px;"></i>
        </a>
        <a href="https://www.instagram.com/comunidadecristaguaruja/" target="_blank">
          <i class="fa-brands fa-instagram" style="font-size: 24px"></i>
        </a>
        <a href="https://www.facebook.com/comunidadecristadeguaruja" target="_blank">
          <i class="fa-brands fa-facebook-f" style="font-size: 24px;"></i>
        </a>
      </div>
    </nav>
    <aside class="mt-4">
      <p>
        Copyright © 2024 - Todos os direitos reservados pela
        <b>Comunidade Cristã de Guarujá</b>
      </p>
      <p>Feito por <a href="https://github.com/boostagv" target="_blank">boost.agv</a></p>
    </aside>
  </footer>
</template>

<script lang="ts" setup>

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const navigateToSection = async (sectionId: string) => {
  // Se já estamos na página inicial, apenas role para a seção
  if (route.path === '/') {
    scrollToSection(sectionId);
  } else {
    // Caso contrário, navegue para a home e role para a seção após o carregamento
    await router.push('/');
    setTimeout(() => scrollToSection(sectionId), 500); // Ajuste o tempo, se necessário
  }
};

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.bg-azul {
  background-color: #3d6090;
}
</style>
