export enum CategoryType {
  EARGASM = "eargasm",
  REVIEW = "review",
  ADRENALINE_RUSH = "adrenaline-rush",
  ISLE_OF_MAN = "isle-of-man",
}

export interface Category {
  _id: string;
  categoryName: string;
  category: CategoryType;
}

export interface ListCategoryResponse {
  categories: Category[];
}

export interface CategoryInfoResponse {
  category: Category;
}
