import clsx from "clsx";
import { AiFillLike } from "react-icons/ai";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useAuth, useLikes, useLoader, useWatchLater } from "../../context";
import { Video } from "../../model/type";
import { Path, ToastError, ToastSuccess } from "../../util/constant";
import * as api from "../../model/api";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  className?: string;
  video: Video;
  togglePlaylistModal: () => void;
  showPlaylistModal: boolean;
}

export const VideoActions: React.FC<Props> = ({
  className,
  video,
  togglePlaylistModal,
  showPlaylistModal,
}) => {
  const navigate = useNavigate();
  const loader = useLoader();
  const { likedVideos, syncLikesWithServer } = useLikes();
  const { watchLater, syncWatchLaterWithServer } = useWatchLater();
  const { auth } = useAuth();

  const [isLiked, setIsLiked] = useState(
    likedVideos.some((likedVideo) => likedVideo._id === video._id)
  );
  const [isWatchLater, setIsWatchLater] = useState(
    watchLater.some((laterVideo) => laterVideo._id === video._id)
  );

  const likeVideoRequest = async () => {
    loader.start();
    try {
      const { status, data } = await api.addToLikes(video);
      if (status !== 201) return;
      syncLikesWithServer();
      setIsLiked(true);
      toast.success(ToastSuccess.LIKE);
    } catch (error) {
      toast.error(ToastError.LIKE);
    } finally {
      loader.stop();
    }
  };

  const removeLikeRequest = async () => {
    loader.start();
    try {
      const { status } = await api.removeFromLikes(video._id);
      if (status !== 200) return;
      syncLikesWithServer();
      setIsLiked(false);
      toast.success(ToastSuccess.UNLIKE);
    } catch (error) {
      toast.error(ToastError.UNLIKE);
    } finally {
      loader.stop();
    }
  };

  const addToWatchLaterRequest = async () => {
    loader.start();
    try {
      const { status } = await api.addToWatchLater(video);
      if (status !== 201) return;
      syncWatchLaterWithServer();
      setIsWatchLater(true);
      toast.success(ToastSuccess.ADD_TO_WATCH_LATER);
    } catch (error) {
      toast.error(ToastError.ADD_TO_WATCH_LATER);
    } finally {
      loader.stop();
    }
  };

  const removeFromWatchLaterRequest = async () => {
    loader.start();
    try {
      const { status } = await api.removeFromWatchLater(video._id);
      if (status !== 200) return;
      syncWatchLaterWithServer();
      setIsWatchLater(false);
      toast.success(ToastSuccess.REMOVE_FROM_WATCH_LATER);
    } catch (error) {
      toast.error(ToastError.REMOVE_FROM_WATCH_LATER);
      loader.stop();
    }
  };

  const handleLikeChange = () => {
    if (!auth?.isLoggedIn) {
      navigate(Path.LOGIN);
      return;
    }
    if (!isLiked) {
      likeVideoRequest();
    } else {
      removeLikeRequest();
    }
  };

  const handleWatchLaterChange = () => {
    if (!auth?.isLoggedIn) {
      navigate(Path.LOGIN);
      return;
    }
    if (!isWatchLater) {
      addToWatchLaterRequest();
    } else {
      removeFromWatchLaterRequest();
    }
  };

  return (
    <div className={clsx("fr-ct-ct", className)}>
      <Button onClick={handleLikeChange} variant="icon" className="mx-sm">
        <AiFillLike className={clsx("txt-lg", isLiked && "txt-info")} />
      </Button>
      <Button
        onClick={togglePlaylistModal}
        variant="icon"
        className={clsx("mx-sm", showPlaylistModal && "no-events")}
      >
        <MdVideoLibrary className="txt-lg" />
      </Button>
      <Button onClick={handleWatchLaterChange} variant="icon" className="mx-sm">
        <MdWatchLater
          className={clsx("txt-lg", isWatchLater && "txt-primary")}
        />
      </Button>
    </div>
  );
};
