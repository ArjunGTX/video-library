import { createContext, useContext, useState } from "react";
import { Playlist } from "../model/type";
import * as api from "../model/api";

interface Props {
  children?: React.ReactNode;
}

interface Context {
  playlists: Playlist[];
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
  syncPlaylistWithServer: () => void;
  loading: boolean;
}

const PlaylistContext = createContext<Context>({} as Context);

export const usePlaylist = () => useContext(PlaylistContext);

export const PlaylistProvider: React.FC<Props> = ({ children }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const getPlaylistRequest = async () => {
    lastUpdated === 0 && setLoading(true);
    try {
      const { status, data } = await api.getPlaylist();
      if (status !== 200) return;
      setPlaylists(data.playlists);
      setLastUpdated(Date.now());
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  const syncPlaylistWithServer = () => {
    getPlaylistRequest();
  };

  return (
    <PlaylistContext.Provider
      value={{ playlists, setPlaylists, loading, syncPlaylistWithServer }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
