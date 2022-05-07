export type CategoryType =
  | "eargasm"
  | "review"
  | "adrenaline-rush"
  | "isle-of-man";

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
