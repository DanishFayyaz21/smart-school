// api.js
import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true'
    // Add any other default headers
  },
});


axiosInstance.interceptors.request.use(async config => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + JSON.parse(token);
  }
  return config;
}, error => {
  Promise.reject(error);

});

export const get = (api) => axiosInstance.get(api);
export const post = (api, body) => axiosInstance.post(api, body);
export const Delete = (api, body) => axiosInstance.delete(api, body);