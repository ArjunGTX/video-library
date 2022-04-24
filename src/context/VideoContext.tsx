import { createContext, useContext, useState } from "react";
import { Video } from "../model/type";
import * as api from "../model/api";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  syncVideosWithServer: () => void;
  loading: boolean;
}

const VideoContext = createContext<Context>({} as Context);

export const useVideos = () => useContext(VideoContext);

export const VideoProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  const getVideosRequest = async () => {
    setLoading(true);
    try {
      const { status, data } = await api.getVideos();
      if (status !== 200) return;
      setVideos(data.videos);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  const syncVideosWithServer = () => {
    getVideosRequest();
  };

  return (
    <VideoContext.Provider
      value={{ videos, setVideos, loading, syncVideosWithServer }}
    >
      {children}
    </VideoContext.Provider>
  );
};
