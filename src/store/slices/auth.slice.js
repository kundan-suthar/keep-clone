import { loginApi } from "../../api/endPoints/authApi";

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

    set({
      user: data.user,
      token: data.token,
      isAuthenticated: true,
      loading: false,
    });

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("authUser", JSON.stringify(data.user));
  },
  logout: async () => {
    set({
      user: null,
      token: null,
      isAuthenticated: null,
    });
  },
});
