import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Loader,
  SkeletonButton,
  SkeletonText,
  SkeletonVideoCard,
  VideoCard,
} from "../../components";
import { getArray } from "../../util/helper";
import * as api from "../../model/api";
import { Playlist } from "../../model/type";
import { BsTrashFill } from "react-icons/bs";
import { usePlaylist } from "../../context";
import { Path, ToastError, ToastSuccess } from "../../util/constant";
import { HiPlus } from "react-icons/hi";
import toast from "react-hot-toast";

export const PlaylistInfo = () => {
  const navigate = useNavigate();
  const { playlistId } = useParams();
  const { syncPlaylistWithServer } = usePlaylist();

  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState<Playlist>();

  useEffect(() => {
    getPlaylistInfoRequest();
  }, []);

  const getPlaylistInfoRequest = async (disableLoading: boolean = false) => {
    !disableLoading && setLoading(true);
    try {
      if (!playlistId) return;
      const { status, data } = await api.getPlaylistInfo(playlistId);
      console.log(data);

      if (status !== 200) return;
      setPlaylistInfo(data.playlist);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromPlaylistRequest = async (videoId: string) => {
    if (!playlistId) return;
    setActionLoading(true);
    try {
      const { status } = await api.removeFromPlaylist(playlistId, videoId);
      if (status !== 200) return;
      syncPlaylistWithServer();
      getPlaylistInfoRequest(true);
      toast.success(ToastSuccess.REMOVE_FROM_PLAYLIST);
    } catch (error) {
      toast.error(ToastError.REMOVE_FROM_PLAYLIST);
    } finally {
      setActionLoading(false);
    }
  };

  const deletePlaylistRequest = async () => {
    if (!playlistId) return;
    setActionLoading(true);
    try {
      const { status } = await api.deletePlaylist(playlistId);
      if (status !== 200) return;
      syncPlaylistWithServer();
      navigate(Path.PLAYLIST);
      toast.success(ToastSuccess.PLAYLIST_DELETE);
    } catch (error) {
      toast.error(ToastError.PLAYLIST_DELETE);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="full-width full-height pos-rel of-hidden">
      <div className="fr-sb-ct full-width p-xl">
        {loading ? (
          <SkeletonText variant="heading" size="md" className="mx-sm" />
        ) : (
          <h2 className="txt-lg txt-light font-medium mx-sm">
            {playlistInfo?.title}
          </h2>
        )}
        {loading ? (
          <>
            <SkeletonButton className="p-sm ml-auto mr-md" />
            <SkeletonButton className="p-sm" />
          </>
        ) : (
          <>
            <Button to={Path.VIDEOS} className="fr-ct-ct ml-auto mr-md">
              ADD VIDEOS <HiPlus className="ml-xs txt-sm" />
            </Button>
            {playlistInfo && (
              <Button
                onClick={deletePlaylistRequest}
                color="error"
                variant="outlined"
                className="fr-ct-ct"
              >
                DELETE <BsTrashFill className="ml-xs" />
              </Button>
            )}
          </>
        )}
      </div>
      {
        <div
          className={clsx(
            "video-container px-xl full-width pos-abs",
            loading ? "ofy-hidden" : "ofy-auto",
            playlistInfo && playlistInfo.videos.length < 3 && !loading
              ? "video-grid-fixed"
              : "video-grid-dynamic"
          )}
        >
          {loading
            ? getArray(8).map((item) => (
                <SkeletonVideoCard className="m-sm" key={item} />
              ))
            : playlistInfo?.videos.map((video) => (
                <VideoCard
                  videoBtn={{
                    icon: <BsTrashFill />,
                    onClick: removeFromPlaylistRequest,
                  }}
                  video={video}
                  className="m-sm"
                  key={video._id}
                />
              ))}
        </div>
      }
      {!loading && playlistInfo?.videos?.length === 0 && (
        <div className="fc-fs-ct py-xl my-xl full-width">
          <p className="mb-lg txt-xl txt-light">No Videos</p>
        </div>
      )}
      {actionLoading && <Loader />}
    </div>
  );
};
