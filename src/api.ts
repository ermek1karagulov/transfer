import axios from "axios";

const API_URL = "https://data.fx.kg/api/v1/current";
const TOKEN = "gJYahXa9UYtQePmSom8SGBF4R5nvNxRKE3yD5Vc364abbad1";

export const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${TOKEN}`;
  return config;
});
