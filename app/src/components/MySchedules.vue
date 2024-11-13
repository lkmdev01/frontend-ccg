<template>
  <div id="programacao" class="background-programacao px-5 py-16 md:py-20">
    <h1 class="text-center text-3xl font-bold pb-10 text-white">Programação</h1>
    <div class="max-w-2xl mx-auto flex flex-col gap-3 text-gray-800">
      <!-- Iterando sobre os eventos para exibi-los dinamicamente -->
      <div
        v-for="event in events"
        :key="event.id"
        class="collapse collapse-arrow bg-gray-300 rounded-lg"
      >
        <input :id="event.day" type="checkbox" class="peer" checked />
        <div class="collapse-title text-xl font-bold" :for="event.day">
          {{ event.day }}
        </div>
        <div class="collapse-content">
          <p v-for="time in event.times" :key="time.id">
            <b>{{ time.hour }}h</b> - {{ time.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Interface para definir a estrutura dos dados de eventos no formato desejado
interface EventTime {
  id: number;
  hour: string;
  description: string;
}

interface Event {
  id: number;
  day: string;
  times: EventTime[];
}

// Referência reativa para armazenar os eventos formatados
const events = ref<Event[]>([]);

// Função para buscar os dados dos eventos da API e formatá-los
// Função para buscar os dados dos eventos da API e formatá-los
const fetchEventsData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/pages/home');

    // Mapeando os dados da API para o formato desejado no componente, usando o tipo `Event`
    events.value = response.data.events.map((event: { id: number; day_of_week: string; event_time: string; event_name: string }) => ({
      id: event.id,
      day: event.day_of_week,
      times: [{
        id: event.id,
        hour: event.event_time.slice(0, 5), // Retira os segundos da hora
        description: event.event_name
      }]
    }));

    console.log(events.value); // Verificar a estrutura de `events` no console
  } catch (error) {
    console.error("Erro ao buscar dados dos eventos:", error);
  }
};


// Executa a função de busca ao montar o componente
onMounted(fetchEventsData);
</script>

<style scoped>
.background-programacao {
  background-image: url('/background-programacao.jpg');
}
</style>
