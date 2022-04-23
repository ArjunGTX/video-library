import React from "react";
import { Video } from "../model/type";

interface Props {
  className?: string;
  video: Video;
}

export const VideoCard: React.FC<Props> = ({ className, video }) => {
  return <div className="video-card fc-fs-fs br-sm pos-rel"></div>;
};
