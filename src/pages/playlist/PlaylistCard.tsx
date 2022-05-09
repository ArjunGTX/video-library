import clsx from "clsx";
import React from "react";
import { Button } from "../../components";
import { Playlist } from "../../model/type";
import { getImageUrl } from "../../util/helper";
import { BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Path } from "../../util/constant";
import * as api from "../../model/api";
import { usePlaylist } from "../../context";

interface Props {
  className?: string;
  playlist: Playlist;
}

export const PlaylistCard: React.FC<Props> = ({ className, playlist }) => {
  const navigate = useNavigate();

  const { syncPlaylistWithServer } = usePlaylist();
  const getVideoLength = () => {
    const {
      videos: { length },
    } = playlist;
    if (length === 1) return "1 Video";
    return `${length} Videos`;
  };

  const deletePlaylistRequest = async () => {
    try {
      const { status } = await api.deletePlaylist(playlist._id);
      if (status !== 200) return;
      syncPlaylistWithServer();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deletePlaylistRequest();
  };

  return (
    <div
      onClick={() => navigate(`${Path.PLAYLIST}/${playlist._id}`)}
      className={clsx(
        "playlist-card bg-secondary-light fr-fs-fs p-sm br-sm cursor-pointer",
        className
      )}
    >
      <div className="w-30 full-height">
        <img
          className="img-res br-sm"
          src={getImageUrl(playlist.videos[0]?._id)}
          alt="cover"
        />
      </div>
      <div className="w-70 full-height fc-fs-fs p-md txt-light">
        <h3 className="font-medium">{playlist.title}</h3>
        <p className="font-medium mb-md">{getVideoLength()}</p>
        <Button
          onClick={handleDelete}
          variant="icon"
          className="ml-auto mt-auto"
        >
          <BsTrashFill className="txt-md" />
        </Button>
      </div>
    </div>
  );
};
