import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video } from "../model/type";
import { Path } from "../util/constant";
import { getImageUrl } from "../util/helper";
import { Avatar } from "./Avatar";

interface Props {
  className?: string;
  video: Video;
  nowPlaying?: boolean;
}

export const VideoCard: React.FC<Props> = ({ className, video }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(getImageUrl(video._id));

  return (
    <div
      onClick={() => navigate(`${Path.VIDEOS}/${video._id}`)}
      onMouseOver={() => setImageUrl(video.thumbnail)}
      onMouseLeave={() => setImageUrl(getImageUrl(video._id))}
      className={clsx(
        "video-card fc-fs-fs br-sm pos-rel bg-secondary-light p-md txt-light cursor-pointer",
        className
      )}
    >
      <h5>{video.title}</h5>
      <div className="full-width full-height my-md of-hidden br-xs">
        <img src={imageUrl} alt={video.title} className="img-res" />
      </div>
      <div className="fr-fs-ct">
        <Avatar name={video.creator} imageSrc={video.creatorImage} />
        <p className="ml-md">{video.creator}</p>
      </div>
    </div>
  );
};
