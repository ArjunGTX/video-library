import { useEffect } from "react";
import { SkeletonVideoCard, VideoCard } from "../../components";
import { useVideos } from "../../context/VideoContext";
import { CategoryList } from "./CategoryList";
import { getArray } from "../../util/helper";
import clsx from "clsx";

export const VideoList = () => {
  const { videos, loading, syncVideosWithServer } = useVideos();

  useEffect(() => {
    if (videos.length === 0) {
      syncVideosWithServer();
    }
  }, [videos]);

  return (
    <div className="full-width full-height of-hidden">
      <CategoryList />
      <div
        className={clsx(
          "video-container px-xl full-width full-height",
          loading ? "ofy-hidden" : "ofy-auto"
        )}
      >
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard className="m-sm" key={item} />
            ))
          : videos.map((video) => (
              <VideoCard video={video} className="m-sm" key={video._id} />
            ))}
      </div>
    </div>
  );
};
