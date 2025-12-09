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
  const requestInterceptorId = axiosClient.interceptors.request.use(
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
  const responseInterceptorId = axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      // const logout = useStore.getState().logout;

      // if (error.response) {
      //   if (error.response.status === 401) {
      //     logout(); // token expired or invalid
      //   }
      // }

      const originalRequest = error.config;

      // Prevent infinite loop: do not retry if the failed request IS the refresh token request
      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        !originalRequest.url.includes("refresh-token")
      ) {
        originalRequest._retry = true;

        if (!refreshPromise) {
          refreshPromise = useAppStore.getState().refreshAccessToken();
        }

        const newAccessToken = await refreshPromise;
        refreshPromise = null;

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          // Fix: Use axiosClient instead of undefined 'api'
          return axiosClient(originalRequest);
        }
      }

      return Promise.reject(error);
    }
  );

  return () => {
    axiosClient.interceptors.request.eject(requestInterceptorId);
    axiosClient.interceptors.response.eject(responseInterceptorId);
  };
};

export default axiosClient;
