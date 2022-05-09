import clsx from "clsx";
import { SkeletonIcon } from "./SkeletonIcon";
import { SkeletonText } from "./SkeletonText";

interface Props {
  className?: string;
}

export const SkeletonPlaylistCard: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "playlist-card bg-secondary-light fr-fs-fs p-sm br-sm",
        className
      )}
    >
      <div className="w-30 full-height skeleton br-sm"></div>
      <div className="w-70 full-height fc-fs-fs p-md">
        <SkeletonText className="mb-md" size="xs" variant="heading" />
        <SkeletonText size="xs" />
        <SkeletonIcon size="sm" className="mt-auto ml-auto" />
      </div>
    </div>
  );
};
