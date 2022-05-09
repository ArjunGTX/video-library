import { createContext, useContext, useState } from "react";
import { Category } from "../model/type";
import * as api from "../model/api";
import { Constant } from "../util/constant";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  loading: boolean;
  syncCategoriesWithServer: () => void;
}

const CategoryContext = createContext<Context>({} as Context);

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategoriesRequest = async () => {
    if (Date.now() - lastUpdated < Constant.CATEGORY_REFRESH_INTERVAL) return;
    setLoading(true);
    try {
      const { status, data } = await api.getCategories();
      if (status !== 200) return;
      setCategories(data.categories);
      setLastUpdated(Date.now());
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const syncCategoriesWithServer = () => {
    getCategoriesRequest();
  };

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, loading, syncCategoriesWithServer }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
