// src/api/axiosClient.js
import axios from "axios";
import { useAppStore } from "../store/useStore";

let refreshPromise = null;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const setupInterceptors = () => {
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
    async (error) => {
      // const logout = useStore.getState().logout;

      // if (error.response) {
      //   if (error.response.status === 401) {
      //     logout(); // token expired or invalid
      //   }
      // }

      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (!refreshPromise) {
          refreshPromise = useAppStore.getState().refreshAccessToken();
        }

        const newAccessToken = await refreshPromise;
        refreshPromise = null;

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      }

      return Promise.reject(error);
    }
  );
};

export default axiosClient;
