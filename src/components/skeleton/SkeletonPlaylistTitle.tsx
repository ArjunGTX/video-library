import clsx from "clsx";
import { SkeletonText } from "./SkeletonText";

interface Props {
  className?: string;
}

export const SkeletonPlaylistTitle: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "py-md px-xl br-sm bg-secondary-light fr-fs-ct",
        className
      )}
    >
      <SkeletonText variant="heading" size="sm" />
    </div>
  );
};
