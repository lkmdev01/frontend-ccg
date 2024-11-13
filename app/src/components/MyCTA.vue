<template>
  <div id="contato" class="bg-white w-full flex justify-center items-center">
    <div class="flex flex-col md:flex-row w-11/12 md:w-8/12 my-16 md:my-20 bg-gray-100 border rounded-lg shadow-lg">
      <div class="w-full md:w-1/2 bg-form bg-gray-300 rounded-t-lg md:rounded-t-none md:rounded-l-lg"></div>
      <div class="w-full md:w-1/2 px-5 md:px-10 py-10 md:py-16 flex justify-center">
        <form @submit.prevent="enviarMensagem" class="text-gray-800 px-5 w-full">
          <h2 class="text-2xl font-semibold mb-5 text-center md:text-left">Fale conosco</h2>
          <div v-for="field in formFields" :key="field.id" class="form-group my-3">
            <label :for="field.field_name">{{ field.placeholder }}:</label>
            <input
              v-if="field.field_type === 'text' || field.field_type === 'email'"
              :type="field.field_type"
              :id="field.field_name"
              :placeholder="field.placeholder"
              v-model="formData[field.field_name]"
              :required="field.required"
              :minlength="field.minLength"
              :maxlength="field.maxLength"
              class="input input-bordered w-full bg-transparent"
            />
            <textarea
              v-if="field.field_type === 'textarea'"
              :id="field.field_name"
              :placeholder="field.placeholder"
              v-model="formData[field.field_name]"
              :required="field.required"
              :minlength="field.minLength"
              :maxlength="field.maxLength"
              class="textarea textarea-bordered w-full bg-transparent"
            ></textarea>
            <select
              v-if="field.field_type === 'select'"
              :id="field.field_name"
              v-model="formData[field.field_name]"
              :required="field.required"
              class="select select-bordered w-full bg-transparent"
            >
              <option disabled value="">Selecione uma opção</option>
              <option v-for="option in (field.options ? JSON.parse(field.options) : [])" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div class="flex justify-center md:justify-start">
            <button type="submit" class="btn w-full md:w-auto">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Interface para os campos do formulário
interface FormField {
  id: number;
  page_id: number;
  field_name: string;
  field_type: 'text' | 'email' | 'textarea' | 'select'; // Adicione outros tipos conforme necessário
  placeholder: string;
  required?: boolean; // Campo opcional
  options?: string | undefined; // Para campos de seleção, se aplicável
  minLength?: number; // Validação de comprimento mínimo
  maxLength?: number; // Validação de comprimento máximo
}

// Referências reativas para armazenar os campos do formulário e os dados do formulário
const formFields = ref<FormField[]>([]);
const formData = ref<{ [key: string]: string }>({});

// Função para buscar dados dos campos do formulário da API
const fetchFormFields = async () => {
  try {
    const response = await axios.get('http://backend-ccg-production.up.railway.app/api/pages/home');
    formFields.value = response.data.formFields;

    // Inicializa `formData` com as chaves dos campos do formulário
    formFields.value.forEach((field: FormField) => {
      formData.value[field.field_name] = '';
    });

    console.log(formFields.value); // Para ver os campos no console
  } catch (error) {
    console.error('Erro ao buscar dados dos campos do formulário:', error);
  }
}

// Função para enviar a mensagem
const enviarMensagem = () => {
  const whatsappNumber = '+5513974089412';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${
    Object.entries(formData.value)
      .map(([key, value]) => {
        // Mapeia as chaves para os novos nomes
        let newKey = '';
        switch (key) {
          case 'name':
            newKey = 'nome';
            break;
          case 'message':
            newKey = 'mensagem';
            break;
          case 'subject':
            newKey = 'assunto';
            break;
          default:
            newKey = key; // Mantém o nome original se não houver correspondência
        }
        return `${encodeURIComponent(newKey)}: ${encodeURIComponent(value)}`;
      })
      .join('%0A')
  }`;

  window.open(whatsappLink, '_blank');

  // Limpa os campos após o envio
  Object.keys(formData.value).forEach(key => formData.value[key] = '');
}

// Executa a função de busca dos campos ao montar o componente
onMounted(fetchFormFields);
</script>

<style scoped>
.background-programacao {
  background-image: url('/background-programacao.jpg');
}

.bg-form {
  background-image: url('https://i.pinimg.com/736x/38/d4/2e/38d42e8e1c5bd778d5f5746c87bd3256.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.btn {
  background-color: #2e74d6;
  color: white;
  border: 1px solid #1f4c8d;
}
</style>
