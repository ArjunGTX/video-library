import { createContext, useContext, useState } from "react";
import { Video } from "../model/type";
import * as api from "../model/api";
import { Constant } from "../util/constant";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  likedVideos: Video[];
  setLikedVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  syncLikesWithServer: () => void;
  loading: boolean;
}

const LikesContext = createContext<Context>({} as Context);

export const useLikes = () => useContext(LikesContext);

export const LikesProvider: React.FC<Props> = ({ children }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [likedVideos, setLikedVideos] = useState<Video[]>([]);

  const getLikedVideosRequest = async () => {
    if (Date.now() - lastUpdated < Constant.LIKES_REFRESH_INTERVAL) return;
    lastUpdated === 0 && setLoading(true);
    try {
      const { status, data } = await api.getLikes();
      if (status !== 200) return;
      setLikedVideos(data.likes);
      setLastUpdated(Date.now());
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const syncLikesWithServer = () => {
    getLikedVideosRequest();
  };

  return (
    <LikesContext.Provider
      value={{ likedVideos, setLikedVideos, loading, syncLikesWithServer }}
    >
      {children}
    </LikesContext.Provider>
  );
};
