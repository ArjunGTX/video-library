import clsx from "clsx";
import { useEffect } from "react";
import { SkeletonVideoCard, VideoCard } from "../../components";
import { useLikes } from "../../context";
import { getArray } from "../../util/helper";

export const LikedList = () => {
  const { likedVideos, loading, syncLikesWithServer } = useLikes();

  useEffect(() => {
    if (likedVideos.length === 0) {
      syncLikesWithServer();
    }
  }, [likedVideos]);

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <div className="fr-fs-ct full-width p-xl">
        <h2 className="txt-lg txt-light font-medium mx-sm">LIKED VIDEOS</h2>
      </div>
      <div
        className={clsx(
          "video-container px-xl full-width pos-abs",
          loading ? "ofy-hidden" : "ofy-auto",
          likedVideos.length < 3 && !loading
            ? "video-grid-fixed"
            : "video-grid-dynamic"
        )}
      >
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard className="m-sm" key={item} />
            ))
          : likedVideos.map((video) => (
              <VideoCard video={video} className="m-sm" key={video._id} />
            ))}
      </div>
    </div>
  );
};
