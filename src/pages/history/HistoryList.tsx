import clsx from "clsx";
import { useEffect } from "react";
import { Button, SkeletonVideoCard, VideoCard } from "../../components";
import { useHistory } from "../../context";
import { Path } from "../../util/constant";
import { getArray } from "../../util/helper";

export const HistoryList = () => {
  const { history, loading, syncHistoryWithServer } = useHistory();

  useEffect(() => {
    if (history.length === 0) {
      syncHistoryWithServer();
    }
  }, [history]);

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <div className="fr-fs-ct full-width p-xl">
        <h2 className="txt-lg txt-light font-medium mx-sm">HISTORY</h2>
      </div>
      <div
        className={clsx(
          "video-container px-xl full-width pos-abs",
          loading ? "ofy-hidden" : "ofy-auto",
          history.length < 3 && !loading
            ? "video-grid-fixed"
            : "video-grid-dynamic"
        )}
      >
        {loading
          ? getArray(8).map((item) => (
              <SkeletonVideoCard className="m-sm" key={item} />
            ))
          : history.map((video) => (
              <VideoCard video={video} className="m-sm" key={video._id} />
            ))}
      </div>
      {!loading && history.length === 0 && (
        <div className="fc-ct-ct full-height full-width">
          <p className="mb-lg txt-xl txt-light">History is Empty</p>
          <Button size="lg" to={Path.VIDEOS}>
            Start Watching
          </Button>
        </div>
      )}
    </div>
  );
};
