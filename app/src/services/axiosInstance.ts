import axios from 'axios'; // Importação do axios

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
