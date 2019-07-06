import axios from 'axios';
import { getAuthToken } from './auth';

const baseUrl = 'http://192.168.1.107:3333';

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(async (config) => {
  if (config.url !== '/sessions') {
    try {
      const { token } = await getAuthToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.tron.log(err);
    }
  }
  return config;
});

export default api;
