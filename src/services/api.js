import {API_URL} from '../consts/api'
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
});

export default api;