import axios from 'axios';

// const baseUrl = 'http://10.168.69.163:3333';
const baseUrl = 'http://192.168.1.107:3333';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
