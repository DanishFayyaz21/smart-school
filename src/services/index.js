import axios from "axios";


const token = localStorage.getItem("token");
let mytoken = null;

if (token) {
  try {
    mytoken = JSON.parse(token);
  } catch (error) {
    // Handle the error when parsing invalid JSON
    console.error("Error parsing token:", error);
  }
}

console.log('hvjhvh', mytoken);

export const baseURL = "http://localhost:4000/api/v1";
export const headers = {
  "Content-Type": "application/json",
  Authorization: mytoken ? `Bearer ${mytoken}` : "",
};

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export const get = (url, params) => axiosInstance.get(url, params);
export const post = (url, body) => axiosInstance.post(url, body);
export const del = (url, data) => axiosInstance.delete(url, data);
export const put = (url, body) => axiosInstance.put(url, body);

