import axios from 'axios';
import { API_URL } from '../config';

const axiosRequestConfig = {
  baseURL: `${API_URL}`,
};

export const axiosInstance = axios.create(axiosRequestConfig);
