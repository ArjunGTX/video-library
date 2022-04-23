import clsx from "clsx";
import { SkeletonIcon } from "./SkeletonIcon";
import { SkeletonText } from "./SkeletonText";

interface Props {
  className?: string;
}

export const SkeletonVideoCard: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "video-card bg-secondary-light br-sm fc-fs-fs p-md",
        className
      )}
    >
      <SkeletonText variant="heading" size="md" />
      <div className="full-width full-height br-sm skeleton mt-md"></div>
      <div className="fr-fs-ct full-width mt-md">
        <SkeletonIcon />
        <SkeletonText className="ml-md" size="sm" />
      </div>
    </div>
  );
};
