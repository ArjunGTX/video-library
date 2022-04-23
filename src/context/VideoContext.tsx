import { createContext, useContext, useState } from "react";
import { Video } from "../model/type";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
}

const VideoContext = createContext<Context>({} as Context);

export const useVideos = () => useContext(VideoContext);

export const VideoProvider: React.FC<Props> = ({ children }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
