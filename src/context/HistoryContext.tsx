import { createContext, useContext, useState } from "react";
import { Video } from "../model/type";
import * as api from "../model/api";
import { Constant } from "../util/constant";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  history: Video[];
  setHistory: React.Dispatch<React.SetStateAction<Video[]>>;
  syncHistoryWithServer: () => void;
  loading: boolean;
}

const HistoryContext = createContext<Context>({} as Context);

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider: React.FC<Props> = ({ children }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<Video[]>([]);

  const getHistoryRequest = async () => {
    if (Date.now() - lastUpdated < Constant.LIKES_REFRESH_INTERVAL) return;
    setLoading(true);
    try {
      const { status, data } = await api.getHistory();
      if (status !== 200) return;
      setHistory(data.history);
      setLastUpdated(Date.now());
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  const syncHistoryWithServer = () => {
    getHistoryRequest();
  };

  return (
    <HistoryContext.Provider
      value={{ history, setHistory, loading, syncHistoryWithServer }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
