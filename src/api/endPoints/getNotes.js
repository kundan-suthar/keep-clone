import axiosClient from "../client";
import { baseQuery } from "../baseQuery";

export const loginApi = (payload) =>
  baseQuery(() => axiosClient.get("/api/v1/users/login"));
