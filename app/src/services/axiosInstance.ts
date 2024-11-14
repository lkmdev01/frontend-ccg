import axios from 'axios'; // Importação do axios

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Alterado para usar import.meta.env
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
