import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button, Loader, SkeletonVideoCard, VideoCard } from "../../components";
import { useHistory } from "../../context";
import { getArray } from "../../util/helper";
import * as api from "../../model/api";
import { BsTrashFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { ToastError, ToastSuccess } from "../../util/constant";

export const HistoryList = () => {
  const { history, loading, syncHistoryWithServer } = useHistory();

  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (history.length === 0) {
      syncHistoryWithServer();
    }
  }, [history]);

  const removeFromHistoryRequest = async (videoId: string) => {
    setActionLoading(true);
    try {
      const { status } = await api.removeFromHistory(videoId);
      if (status !== 200) return;
      syncHistoryWithServer();
      toast.success(ToastSuccess.REMOVE_FROM_HISTORY);
    } catch (error) {
      toast.error(ToastError.REMOVE_FROM_HISTORY);
    } finally {
      setActionLoading(false);
    }
  };

  const clearHistoryRequest = async () => {
    setActionLoading(true);
    try {
      const { status } = await api.clearHistory();
      if (status !== 200) return;
      syncHistoryWithServer();
      toast.success(ToastSuccess.CLEAR_HISTORY);
    } catch (error) {
      toast.error(ToastError.CLEAR_HISTORY);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <div className="fr-sb-ct full-width p-xl">
        <h2 className="txt-lg txt-light font-medium mx-sm">HISTORY</h2>
        {!loading && history.length !== 0 && (
          <Button
            onClick={clearHistoryRequest}
            color="light"
            variant="outlined"
          >
            Clear History
          </Button>
        )}
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
              <VideoCard
                video={video}
                className="m-sm"
                key={video._id}
                videoBtn={{
                  icon: <BsTrashFill />,
                  onClick: removeFromHistoryRequest,
                }}
              />
            ))}
      </div>
      {!loading && history.length === 0 && (
        <div className="fc-fs-ct py-xl my-xl full-width">
          <p className="mb-lg txt-xl txt-light">History is Empty</p>
        </div>
      )}
      {actionLoading && <Loader />}
    </div>
  );
};
