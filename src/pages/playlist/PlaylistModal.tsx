import clsx from "clsx";
import React, { useRef } from "react";
import { Button, TextInput } from "../../components";
import { useClickOutside } from "../../hooks";

interface Props {
  className?: string;
  onClose: () => void;
}

export const PlaylistModal: React.FC<Props> = ({ className, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  return (
    <div
      ref={modalRef}
      className={clsx(
        "playlist-modal pos-fix z-300 bg-secondary-dark shadow-dark p-xl br-sm",
        className
      )}
    >
      <h3 className="txt-primary font-medium mb-md">Choose Playlist</h3>
      <ul className="full-width full-height fc-fs-fs ofy-auto ul-light pb-lg">
        <li className="full-width">
          <button className="full-width py-sm px-lg br-sm txt-light">
            Item
          </button>
        </li>
      </ul>
      <form className="fc-fs-fs full-width">
        <TextInput placeholder="Create new Playlist" className="mt-lg" />
        <div className="fr-fe-ct full-width pt-md">
          <Button
            type="button"
            variant="plain"
            color="primary"
            className="mr-md"
          >
            Cancel
          </Button>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};
