// src/api/endpoints/authApi.js
import axiosClient from "../client";
import { baseQuery } from "../baseQuery";

export const loginApi = (payload) =>
  baseQuery(() => axiosClient.post("/api/v1/users/login", payload));

export const getProfileApi = () =>
  baseQuery(() => axiosClient.get("/auth/profile"));

export const logoutApi = () =>
  baseQuery(() => axiosClient.post("/api/v1/users/logout"));
