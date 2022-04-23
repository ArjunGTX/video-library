import { useEffect, useState } from "react";
import { SkeletonVideoCard, VideoCard } from "../../components";
import { useVideos } from "../../context/VideoContext";
import { CategoryList } from "./CategoryList";
import * as api from "../../model/api";
import { getArray } from "../../util/helper";
import clsx from "clsx";

export const Videos = () => {
  const { videos, setVideos } = useVideos();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videos.length === 0) {
      getVideosRequest();
    }
  }, []);

  const getVideosRequest = async () => {
    setLoading(true);
    try {
      const { status, data } = await api.getVideos();
      if (status !== 200) return;
      setVideos(data.videos);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

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
