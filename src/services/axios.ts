import axios from "axios";
import { parseCookies } from "nookies";
import { AUTH_TOKEN_NAME } from "../constants/auth.constants";

export function getAPIClient(ctx?: any) {
  const { [AUTH_TOKEN_NAME]: token } = parseCookies(ctx);
  console.log({ token });

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
