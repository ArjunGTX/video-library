import axios from "axios";
import { getAccessToken } from "../../util";

const createConfig = (token: string) => ({
  headers: {
    authorization: token,
  },
});

export const axiosGet = async <T>(url: string, requireAuth: boolean) => {
  if (requireAuth) {
    const token = getAccessToken();
    if (!token) return Promise.reject(Error("Invalid AccessToken"));
    return await axios.get<T>(url, createConfig(token));
  }
  return await axios.get<T>(url);
};

export const axiosPost = async <T>(
  url: string,
  requireAuth: boolean,
  data?: any
) => {
  if (requireAuth) {
    const token = getAccessToken();
    if (!token) return Promise.reject(Error("Invalid AccessToken"));
    return await axios.post<T>(url, { data }, createConfig(token));
  }
  return await axios.post<T>(url, { data });
};

export const axiosDelete = async <T>(url: string, requireAuth: boolean) => {
  if (requireAuth) {
    const token = getAccessToken();
    if (!token) return Promise.reject(Error("Invalid AccessToken"));
    return await axios.delete<T>(url, createConfig(token));
  }
  return await axios.delete<T>(url);
};

export * from "./category";
export * from "./video";
