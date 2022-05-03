import clsx from "clsx";
import { useEffect } from "react";
import { BsTrashFill } from "react-icons/bs";
import { SkeletonVideoCard, VideoCard } from "../../components";
import { useWatchLater } from "../../context";
import { getArray } from "../../util/helper";
import * as api from "../../model/api";

export const WatchLaterList = () => {
  const { watchLater, loading, syncWatchLaterWithServer } = useWatchLater();

  useEffect(() => {
    if (watchLater.length === 0) {
      syncWatchLaterWithServer();
    }
  }, [watchLater]);

  const removeFromWatchLaterRequest = async (videoId: string) => {
    try {
      const { status } = await api.removeFromWatchLater(videoId);
      if (status !== 200) return;
      syncWatchLaterWithServer();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <div className="fr-fs-ct full-width p-xl">
        <h2 className="txt-lg txt-light font-medium mx-sm">WATCH LATER</h2>
      </div>
      <div
        className={clsx(
          "video-container px-xl full-width pos-abs",
          loading ? "ofy-hidden" : "ofy-auto",
          watchLater.length < 3 && !loading
            ? "video-grid-fixed"
            : "video-grid-dynamic"
        )}
      >
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard className="m-sm" key={item} />
            ))
          : watchLater.map((video) => (
              <VideoCard
                videoBtn={{
                  icon: <BsTrashFill />,
                  onClick: removeFromWatchLaterRequest,
                }}
                video={video}
                className="m-sm"
                key={video._id}
              />
            ))}
      </div>
      {!loading && watchLater.length === 0 && (
        <div className="fc-fs-ct py-xl my-xl full-width">
          <p className="mb-lg txt-xl txt-light">No Videos Here</p>
        </div>
      )}
    </div>
  );
};
