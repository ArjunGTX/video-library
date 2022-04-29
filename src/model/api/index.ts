import axios from "axios";
import { getAccessToken } from "../../util/helper";

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
  video?: any
) => {
  if (requireAuth) {
    const token = getAccessToken();
    if (!token) return Promise.reject(Error("Invalid AccessToken"));
    return await axios.post<T>(url, { video }, createConfig(token));
  }
  return await axios.post<T>(url, video);
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
export * from "./auth";
