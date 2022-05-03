import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video } from "../model/type";
import { Constant, Path } from "../util/constant";
import { getImageUrl } from "../util/helper";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

interface Props {
  className?: string;
  video: Video;
  videoBtn?: {
    onClick: (videoId: string) => any;
    icon: React.ReactNode;
  };
}

export const VideoCard: React.FC<Props> = ({ className, video, videoBtn }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(getImageUrl(video._id));

  return (
    <div
      onClick={() => navigate(`${Path.VIDEOS}/${video._id}`)}
      onMouseOver={() =>
        setImageUrl(`${Constant.CLOUDINARY_URL}/${video.thumbnail}`)
      }
      onMouseLeave={() => setImageUrl(getImageUrl(video._id))}
      className={clsx(
        "video-card fc-fs-fs pos-rel txt-light cursor-pointer",
        className
      )}
    >
      <div className="full-width full-height of-hidden">
        <img src={imageUrl} alt={video.title} className="img-res" />
      </div>
      <div className="fr-fs-fs p-md video-info full-width">
        <div className="">
          <Avatar
            name={video.creator}
            imageSrc={`${Constant.CLOUDINARY_URL}/${video.creatorImage}`}
          />
        </div>
        <div className="ml-md fc-fs-fs full-width">
          <h5 className="font-medium">{video.title}</h5>
          <p className="txt-xs">{video.creator}</p>
        </div>
        {videoBtn && (
          <Button
            className="ml-auto"
            variant="icon"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              videoBtn.onClick(video._id);
            }}
          >
            {videoBtn.icon}
          </Button>
        )}
      </div>
    </div>
  );
};
