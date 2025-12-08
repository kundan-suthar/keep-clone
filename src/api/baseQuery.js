// src/api/baseQuery.js

export const baseQuery = async (requestFn) => {
  try {
    const response = await requestFn();
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    };
  }
};
