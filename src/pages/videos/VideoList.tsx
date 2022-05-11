import { useEffect } from "react";
import { SkeletonVideoCard, VideoCard } from "../../components";
import { useVideos } from "../../context/VideoContext";
import { CategoryList } from "./CategoryList";
import {
  getArray,
  getFilteredVideos,
  getSearchedVideos,
} from "../../util/helper";
import clsx from "clsx";
import { useFilter } from "../../context";

export const VideoList = () => {
  const { videos, loading, syncVideosWithServer } = useVideos();
  const { filter, query } = useFilter();

  const filteredVideos = getFilteredVideos(videos, filter);

  const searchedVideos = getSearchedVideos(filteredVideos, query);

  useEffect(() => {
    if (videos.length === 0) {
      syncVideosWithServer();
    }
  }, [videos]);

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <CategoryList />
      <div
        className={clsx(
          "video-container px-xl full-width pos-abs",
          loading ? "ofy-hidden" : "ofy-auto",
          searchedVideos.length < 3 && !loading
            ? "video-grid-fixed"
            : "video-grid-dynamic"
        )}
      >
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard className="m-sm" key={item} />
            ))
          : searchedVideos.map((video) => (
              <VideoCard video={video} className="m-sm" key={video._id} />
            ))}
      </div>
    </div>
  );
};
