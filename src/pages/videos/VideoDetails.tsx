import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, VideoCard } from "../../components";
import { useVideos } from "../../context/VideoContext";
import { getVideoUrl } from "../../util/helper";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const { videos, syncVideosWithServer } = useVideos();

  const videoInfo = videos.find((video) => video._id === videoId);

  const suggestedVideos = videos.filter((video) => video._id !== videoId);

  useEffect(() => {
    if (videos.length === 0) {
      syncVideosWithServer();
    }
  }, [videos]);

  return (
    <div className="txt-light full-width full-height video-details">
      <div className="fc-fs-fs">
        <iframe
          title="YouTube video player"
          src={videoId ? getVideoUrl(videoId) : ""}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="fc-fs-fs p-xl">
          <h5 className="txt-lg">{videoInfo?.title}</h5>
          <div className="fr-fs-ct py-md">
            {videoInfo && <Avatar size="xl" name={videoInfo?.creator} />}

            <p className="ml-md txt-sm">{videoInfo?.creator}</p>
          </div>
          <p className="mt-md mb-xxl txt-sm">{videoInfo?.description}</p>
        </div>
      </div>
      <div className="fc-fs-fs">
        {suggestedVideos?.map((video) => (
          <VideoCard video={video} key={video._id} className="my-xs" />
        ))}
      </div>
    </div>
  );
};
