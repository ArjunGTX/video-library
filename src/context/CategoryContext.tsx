import { createContext, useContext, useState } from "react";
import { Category } from "../model/type";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const CategoryContext = createContext<Context>({} as Context);

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
