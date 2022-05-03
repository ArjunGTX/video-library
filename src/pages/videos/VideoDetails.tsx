import clsx from "clsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  SkeletonVideoCard,
  SkeletonVideoPlayer,
  VideoCard,
} from "../../components";
import { useVideos } from "../../context/VideoContext";
import { Constant } from "../../util/constant";
import { getArray, getVideoUrl } from "../../util/helper";
import { VideoActions } from "./VideoActions";
import * as api from "../../model/api";
import { useHistory } from "../../context";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { videos, syncVideosWithServer, loading } = useVideos();
  const { syncHistoryWithServer, history } = useHistory();

  const videoInfo = videos.find((video) => video._id === videoId);

  const suggestedVideos = videos.filter((video) => video._id !== videoId);

  useEffect(() => {
    if (videos.length === 0) {
      syncVideosWithServer();
    }
    if (videoInfo) {
      addVideoToHistoryRequest();
    }
  }, [videos, videoInfo]);

  const addVideoToHistoryRequest = async () => {
    if (!videoInfo || history.some((video) => video._id === videoInfo._id))
      return;
    try {
      const { status, data } = await api.addToHistory(videoInfo);
      if (status !== 201) return;
      syncHistoryWithServer();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={clsx(
        "txt-light full-width full-height video-details",
        loading && "of-hidden"
      )}
    >
      {!loading ? (
        videoInfo ? (
          <div className="fc-fs-fs">
            <iframe
              className="frame"
              title="YouTube video player"
              src={videoId ? getVideoUrl(videoId) : ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
            <div className="fc-fs-fs p-xl">
              <div className="fr-sb-fs full-width">
                <h5 className="txt-lg mr-md">{videoInfo.title}</h5>
                <VideoActions video={videoInfo} />
              </div>
              <div className="fr-fs-ct py-md">
                {videoInfo && (
                  <Avatar
                    size="xl"
                    name={videoInfo.creator}
                    imageSrc={`${Constant.CLOUDINARY_URL}/${videoInfo.creatorImage}`}
                  />
                )}
                <p className="ml-md txt-sm">{videoInfo.creator}</p>
              </div>
              <p className="mt-md mb-xxl txt-sm">{videoInfo.description}</p>
            </div>
          </div>
        ) : (
          <div className="full-width full-height fr-ct-ct txt-xl txt-error">
            Failed to Load Video
          </div>
        )
      ) : (
        <div className="fc-fs-fs of-hidden">
          <SkeletonVideoPlayer />
        </div>
      )}
      <div className="fc-fs-fs">
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard key={item} className="my-xs" />
            ))
          : suggestedVideos?.map((video) => (
              <VideoCard video={video} key={video._id} className="my-xs" />
            ))}
      </div>
    </div>
  );
};
