// src/api/endpoints/registerApi.js
import { baseQuery } from "../baseQuery";
import axiosClient from "../client";

export const registerApi = (payload) =>
  baseQuery(() => axiosClient.post("/api/v1/users/register", payload));
