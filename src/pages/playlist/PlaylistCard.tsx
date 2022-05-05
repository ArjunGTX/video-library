import clsx from "clsx";
import React from "react";
import { Playlist } from "../../model/type";

interface Props {
  className?: string;
  playlist: Playlist;
}

export const PlaylistCard: React.FC<Props> = ({ className, playlist }) => {
  return <div className={clsx("playlist-card fr-fs-fs", className)}></div>;
};
