import * as api from "../api";
import { CategoryInfoResponse, ListCategoryResponse } from "../type";

export const getCategories = async () =>
  await api.axiosGet<ListCategoryResponse>(`/api/categories`, false);

export const getCategoryInfo = async (categoryId: string) =>
  await api.axiosGet<CategoryInfoResponse>(
    `/api/categories/${categoryId}`,
    false
  );
