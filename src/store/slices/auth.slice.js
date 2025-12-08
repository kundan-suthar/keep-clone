import axiosClient from "../../api/client";
import { loginApi, logoutApi } from "../../api/endPoints/authApi";

export const createAuthSlice = (set, get) => ({
  user: null,
  token: null,
  isAuthenticated: null,
  loading: false,
  error: null,
  login: async (credentials) => {
    const { data, error } = await loginApi(credentials);

    if (error) {
      set({ error, loading: false });
      return;
    }
    console.log("log complete data ", data);
    console.log("log access token ", data.data.accessToken);
    console.log("log refresh token ", data.data.refreshToken);
    console.log("log user ", data.data.user);

    set({
      user: data.data.user,
      token: data.data.accessToken,
      isAuthenticated: true,
      loading: false,
    });
  },
  refreshAccessToken: async () => {
    try {
      const res = await axiosClient.post("/api/v1/users/refresh-token");
      const newToken = res.data.data.accessToken;

      set({ accessToken: newToken, isAuthenticated: true });
      return newToken;
    } catch (err) {
      set({ accessToken: null, isAuthenticated: false });
      return null;
    }
  },
  logout: async () => {
    logoutApi();
    set({
      user: null,
      token: null,
      isAuthenticated: null,
    });
  },
});
