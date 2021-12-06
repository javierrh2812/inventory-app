import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
