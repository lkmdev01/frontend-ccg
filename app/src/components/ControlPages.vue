<template>
  <div>
    <h1>{{ pageData.page.title }}</h1>
    <div class="banners">
      <h2>Banners</h2>
      <div v-for="banner in pageData.banners" :key="banner.id">
        <img :src="banner.image_url" :alt="banner.alt_text" />
      </div>
    </div>

    <section v-if="pageData.sections.length">
      <h2>Sobre</h2>
      <div v-for="section in pageData.sections" :key="section.id">
        <h3>{{ section.title }}</h3>
        <p>{{ section.content }}</p>
      </div>
    </section>

    <section v-if="pageData.events.length">
      <h2>Programação</h2>
      <div v-for="event in pageData.events" :key="event.id">
        <p>Dia da semana: {{ event.day_of_week }}</p>
        <p>Evento: {{ event.event_name }}</p>
        <p>Horário: {{ event.time }}</p>
      </div>
    </section>

    <section v-if="pageData.formFields.length">
      <h2>Formulário</h2>
      <form @submit.prevent="submitForm">
        <div v-for="field in pageData.formFields" :key="field.id">
          <label :for="field.name">{{ field.label }}</label>
          <input
            :type="field.type"
            :id="field.name"
            v-model="form[field.name]"
            :placeholder="field.placeholder"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Definindo tipos para os dados da API
interface Page {
  id: number
  title: string
  slug: string
  content: string
  image_url: string
  created_at: string
  updated_at: string
}

interface Banner {
  id: number
  page_id: number
  image_url: string
  alt_text: string
}

interface Section {
  id: number
  page_id: number
  title: string
  content: string
}

interface Event {
  id: number
  page_id: number
  day_of_week: string
  event_name: string
  time: string
}

interface FormField {
  id: number
  page_id: number
  name: string
  label: string
  type: string
  placeholder: string
}

// Estrutura dos dados da página
interface PageData {
  page: Page
  banners: Banner[]
  sections: Section[]
  events: Event[]
  formFields: FormField[]
}

// Estado da página
const pageData = ref<PageData>({
  page: {} as Page,
  banners: [],
  sections: [],
  events: [],
  formFields: []
})

// Função para buscar os dados da página
const fetchPageData = async (slug: string) => {
  try {
    const response = await axios.get(`http://localhost/api/page/${slug}`)
    pageData.value = response.data
  } catch (error) {
    console.error('Erro ao buscar os dados da página:', error)
  }
}

// Formulário reativo
const form = ref<{ [key: string]: string }>({})

// Função de envio de formulário
const submitForm = () => {
  console.log('Dados do formulário:', form.value)
}

// Quando o componente é montado, chamamos a API com o slug da página
onMounted(() => {
  fetchPageData('home') // Troque 'home' pelo slug correto da página
})
</script>

<style scoped>
/* Estilização opcional */
.banners img {
  width: 100%;
  height: auto;
}
</style>
