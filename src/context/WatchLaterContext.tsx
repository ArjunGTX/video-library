import { createContext, useContext, useState } from "react";
import { Video } from "../model/type";
import * as api from "../model/api";
import { Constant } from "../util/constant";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  watchLater: Video[];
  setWatchLater: React.Dispatch<React.SetStateAction<Video[]>>;
  syncWatchLaterWithServer: () => void;
  loading: boolean;
}

const WatchLaterContext = createContext<Context>({} as Context);

export const useWatchLater = () => useContext(WatchLaterContext);

export const WatchLaterProvider: React.FC<Props> = ({ children }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [watchLater, setWatchLater] = useState<Video[]>([]);

  const getWatchLaterRequest = async () => {
    if (Date.now() - lastUpdated < Constant.WATCH_LATER_REFRESH_INTERVAL)
      return;
    lastUpdated === 0 && setLoading(true);
    try {
      const { status, data } = await api.getWatchLater();
      if (status !== 200) return;
      setWatchLater(data.watchlater);
      setLastUpdated(Date.now());
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  const syncWatchLaterWithServer = () => {
    getWatchLaterRequest();
  };

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, setWatchLater, loading, syncWatchLaterWithServer }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
