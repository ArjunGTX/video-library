import { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "../model/type";
import { Constant } from "../util/constant";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  auth: Auth | null;
  setAuth: React.Dispatch<React.SetStateAction<Auth | null>>;
}

const AuthContext = createContext<Context>({} as Context);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<Auth | null>(
    localStorage.getItem(Constant.AUTH)
      ? JSON.parse(localStorage.getItem(Constant.AUTH)!)
      : null
  );

  useEffect(() => {
    if (auth) {
      localStorage.setItem(Constant.AUTH, JSON.stringify(auth));
    } else {
      localStorage.clear();
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
