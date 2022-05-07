import { createContext, useContext, useState } from "react";
import { CategoryType } from "../model/type";

interface Props {
  children?: React.ReactNode;
}

export type Filter = CategoryType | "all" | "latest" | "oldest";

interface Context {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const FilterContext = createContext<Context>({} as Context);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>("all");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
