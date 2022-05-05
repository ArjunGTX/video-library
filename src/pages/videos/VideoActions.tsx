import clsx from "clsx";
import { AiFillLike } from "react-icons/ai";
import { MdVideoLibrary, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useAuth, useLikes, useWatchLater } from "../../context";
import { Video } from "../../model/type";
import { Path } from "../../util/constant";
import * as api from "../../model/api";
import { useState } from "react";

interface Props {
  className?: string;
  video: Video;
}

export const VideoActions: React.FC<Props> = ({ className, video }) => {
  const navigate = useNavigate();
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
    try {
      const { status, data } = await api.addToLikes(video);
      if (status !== 201) return;
      syncLikesWithServer();
      setIsLiked(true);
    } catch (error) {
      console.error(error);
    }
  };

  const removeLikeRequest = async () => {
    try {
      const { status } = await api.removeFromLikes(video._id);
      if (status !== 200) return;
      syncLikesWithServer();
      setIsLiked(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addToWatchLaterRequest = async () => {
    try {
      const { status } = await api.addToWatchLater(video);
      if (status !== 201) return;
      syncWatchLaterWithServer();
      setIsWatchLater(true);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWatchLaterRequest = async () => {
    try {
      const { status } = await api.removeFromWatchLater(video._id);
      if (status !== 200) return;
      syncWatchLaterWithServer();
      setIsWatchLater(false);
    } catch (error) {
      console.error(error);
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
      <Button variant="icon" className="mx-sm">
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
