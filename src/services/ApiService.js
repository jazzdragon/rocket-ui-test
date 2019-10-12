import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const serviceUrl = `${SERVICES_URL}`;

const api = axios.create();

const apiService = {
  get: (path) => api.get(`${serviceUrl}/${path}`)
};

export default apiService;
