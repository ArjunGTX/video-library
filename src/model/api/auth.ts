import * as api from ".";
import { GetUserInfoResponse, LoginResponse, SignUpResponse } from "../type";

export const login = async (email: string, password: string) =>
  await api.axiosPost<LoginResponse>("/api/auth/login", false, {
    email,
    password,
  });

export const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) =>
  await api.axiosPost<SignUpResponse>("/api/auth/signup", false, {
    firstName,
    lastName,
    email,
    password,
  });

export const getUserInfo = async () =>
  await api.axiosGet<GetUserInfoResponse>("/api/user", true);
