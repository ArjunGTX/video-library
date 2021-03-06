import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button, SkeletonPlaylistCard } from "../../components";
import { usePlaylist } from "../../context";
import { getArray } from "../../util/helper";
import { PlaylistCard } from "./PlaylistCard";
import { HiPlus } from "react-icons/hi";
import { PlaylistModal } from "./PlaylistModal";

export const Playlists = () => {
  const { playlists, syncPlaylistWithServer, loading } = usePlaylist();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    syncPlaylistWithServer();
  }, []);

  return (
    <div className="full-width full-height pos-rel of-hidden">
      {showModal && (
        <PlaylistModal createModal onClose={() => setShowModal(false)} />
      )}
      <div className="fr-fs-ct full-width p-xl">
        <h2 className="txt-lg txt-light font-medium mx-sm">PLAYLISTS</h2>
        <Button
          onClick={() => setShowModal(true)}
          className={clsx("ml-md", showModal && "no-events")}
        >
          <HiPlus className="txt-md" />
        </Button>
      </div>
      <div
        className={clsx(
          "video-container px-xl full-width pos-abs",
          loading ? "ofy-hidden" : "ofy-auto",
          playlists.length < 4 && !loading
            ? "video-grid-fixed"
            : "video-grid-dynamic"
        )}
      >
        {loading
          ? getArray(24).map((item) => (
              <SkeletonPlaylistCard className="m-sm" key={item} />
            ))
          : playlists?.map((playlist) => (
              <PlaylistCard
                playlist={playlist}
                className="m-sm"
                key={playlist._id}
              />
            ))}
      </div>
      {!loading && playlists.length === 0 && (
        <div className="fc-fs-ct py-xl my-xl full-width">
          <p className="mb-lg txt-xl txt-light">No Playlists</p>
        </div>
      )}
    </div>
  );
};
