import axios from 'axios';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000; // ms

const _axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers,
});

_axios.interceptors.request.use(config => {
  //config.headers['Access-Control-Allow-Origin'] = '*';
  //config.headers['Access-Control-Allow-Headers'] = '*';
  return config;
});

export { _axios };
