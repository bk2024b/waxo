import api from "./api";
import jwtDecode from "jwt-decode";

export const login = async (username, password) => {
  try {
    const response = await api.post("/token/", { username, password });
    const { access, refresh } = response.data;

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    return jwtDecode(access);
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
};
