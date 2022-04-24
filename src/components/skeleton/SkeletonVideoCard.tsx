import clsx from "clsx";
import { SkeletonIcon } from "./SkeletonIcon";
import { SkeletonText } from "./SkeletonText";

interface Props {
  className?: string;
}

export const SkeletonVideoCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx("video-card bg-secondary-light fc-fs-fs", className)}>
      <div className="full-width full-height skeleton"></div>
      <div className="fr-fs-fs full-width p-md">
        <SkeletonIcon />
        <div className="fc-fs-fs ml-md">
          <SkeletonText className="mb-sm" size="sm" variant="heading" />
          <SkeletonText size="sm" />
        </div>
      </div>
    </div>
  );
};
