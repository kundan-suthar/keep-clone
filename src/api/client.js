// src/api/axiosClient.js
import axios from "axios";
import { useAppStore } from "../store/useStore";
// import { useStore } from "../store/useStore";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = useAppStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // const logout = useStore.getState().logout;

    // if (error.response) {
    //   if (error.response.status === 401) {
    //     logout(); // token expired or invalid
    //   }
    // }

    return Promise.reject(error);
  }
);

export default axiosClient;
