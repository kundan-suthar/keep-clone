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

    localStorage.setItem("authToken", data.data.accessToken);
    localStorage.setItem("authUser", JSON.stringify(data.data.user));
  },
  logout: async () => {
    set({
      user: null,
      token: null,
      isAuthenticated: null,
    });
  },
});
