import { createContext, useContext, useEffect, useState } from "react";
import { Loader } from "../components";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  start: () => void;
  stop: () => void;
}

const LoaderContext = createContext<Context>({} as Context);

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const loader = {
    start: () => setLoading(true),
    stop: () => setLoading(false),
  };

  return (
    <LoaderContext.Provider value={loader}>
      {children}
      {loading && <Loader />}
    </LoaderContext.Provider>
  );
};
