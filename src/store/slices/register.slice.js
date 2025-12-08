import { registerApi } from "../../api/endPoints/registerApi";

export const createRegisterSlice = (set, get) => ({
  registerLoading: false,
  registerError: null,
  registerSuccess: false,

  // registerSlice.js
  registerUser: async (formData) => {
    const { data, error } = await registerApi(formData);

    if (error) {
      set({ registerError: error, registerLoading: false });
      return;
    }

    set({ registerSuccess: true, registerLoading: false });

    // // Optional auto-login
    // const login = get().login;
    // await login({ email: formData.email, password: formData.password });
  },
});
