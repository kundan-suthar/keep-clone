// src/api/endpoints/authApi.js
import axiosClient from "../client";
import { baseQuery } from "../baseQuery";

export const loginApi = (payload) =>
  baseQuery(() => axiosClient.post("/auth/login", payload));

export const getProfileApi = () =>
  baseQuery(() => axiosClient.get("/auth/profile"));
