import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, TextInput } from "../../components";
import { SkeletonPlaylistTitle } from "../../components/skeleton/SkeletonPlaylistTitle";
import { usePlaylist } from "../../context";
import { useClickOutside } from "../../hooks";
import * as api from "../../model/api";
import { Video } from "../../model/type";
import { getArray } from "../../util/helper";
import { BsTrashFill } from "react-icons/bs";

interface Props {
  className?: string;
  onClose: () => void;
  video?: Video;
  createModal?: boolean;
}

export const PlaylistModal: React.FC<Props> = ({
  className,
  onClose,
  video,
  createModal,
}) => {
  const { playlists, syncPlaylistWithServer, loading } = usePlaylist();
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  const [playlistInputs, setPlaylistInputs] = useState({
    title: "",
  });
  const [inputErrors, setInputErrors] = useState({
    title: "",
  });

  useEffect(() => {
    syncPlaylistWithServer();
  }, []);

  const createPlaylistRequest = async () => {
    if (!validateInputs()) return;
    try {
      const { status } = await api.createPlaylist(playlistInputs.title);
      if (status !== 201) return;
      syncPlaylistWithServer();
      setPlaylistInputs({ title: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const addToPlaylistRequest = async (playlistId: string) => {
    if (!video) return;
    try {
      const { status } = await api.addToPlaylist(playlistId, video);
      if (status !== 201) return;
      syncPlaylistWithServer();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromPlaylistRequest = async (playlistId: string) => {
    if (!video) return;
    try {
      const { status } = await api.removeFromPlaylist(playlistId, video._id);
      if (status !== 200) return;
      syncPlaylistWithServer();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistInputs((inputs) => ({
      ...inputs,
      [e.target.id]: e.target.value,
    }));
    setInputErrors((errors) => ({
      ...errors,
      [e.target.id]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPlaylistRequest();
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    playlistId: string
  ) => {
    e.stopPropagation();
    removeFromPlaylistRequest(playlistId);
    onClose();
  };

  const validateInputs = () => {
    if (!playlistInputs.title) {
      setInputErrors((errors) => ({
        ...errors,
        title: "Enter Playlist Title!",
      }));
      return false;
    }
    if (playlists.some((playlist) => playlist.title === playlistInputs.title)) {
      setInputErrors((errors) => ({
        ...errors,
        title: "Playlist already exists!",
      }));
      return false;
    }
    return true;
  };

  return (
    <div
      ref={modalRef}
      className={clsx(
        "playlist-modal pos-fix z-300 bg-secondary-dark shadow-dark p-xl br-sm fc-fs-fs txt-light",
        className
      )}
    >
      <h4 className="txt-primary font-medium mb-md">
        {createModal ? "Create Playlist" : "Choose Playlist"}
      </h4>
      {!createModal && (
        <div
          className={clsx(
            "full-width fc-fs-fs ul-light pb-lg",
            loading ? "ofy-hidden" : "ofy-auto"
          )}
        >
          {loading
            ? getArray(4).map((item) => (
                <SkeletonPlaylistTitle
                  className="my-xs full-width"
                  key={item}
                />
              ))
            : playlists?.map((playlist) => (
                <li key={playlist._id} className="full-width my-xs px-md">
                  <button
                    onClick={() => addToPlaylistRequest(playlist._id)}
                    className="full-width py-sm px-xl fr-sb-ct br-sm txt-light txt-xs bg-secondary-light of-hidden"
                  >
                    {playlist.title}
                    {playlist.videos.find(
                      (listVideo) => listVideo._id === video?._id
                    ) && (
                      <Button
                        type="button"
                        onClick={(e) => handleDelete(e, playlist._id)}
                        variant="icon"
                      >
                        <BsTrashFill className="txt-sm" />
                      </Button>
                    )}
                  </button>
                </li>
              ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="fc-fs-fs full-width">
        <TextInput
          id="title"
          value={playlistInputs.title}
          onChange={handleInputChange}
          placeholder="Create new Playlist"
          className="mt-lg"
        />
        {inputErrors.title && (
          <Alert message={inputErrors.title} className="mt-xs" />
        )}
        <div className="fr-fe-ct full-width pt-md">
          <Button
            type="button"
            variant="plain"
            color="primary"
            className="mr-md"
            onClick={onClose}
          >
            Close
          </Button>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};
