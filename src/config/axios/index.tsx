import axios from 'axios';

const API_URL = `https://jsonplaceholder.typicode.com`;

const api = axios.create({
  baseURL: API_URL,
});

const { get, post, put, patch, delete: destroy } = api;

export { get, post, put, patch, destroy };

export default api;
