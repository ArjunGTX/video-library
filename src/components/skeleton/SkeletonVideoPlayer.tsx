import clsx from "clsx";
import React from "react";
import { SkeletonIcon } from "./SkeletonIcon";
import { SkeletonText } from "./SkeletonText";

interface Props {
  className?: string;
}

export const SkeletonVideoPlayer: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx("full-width fc-fs-fs full-height", className)}>
      <div className="full-width half-height frame skeleton"></div>
      <div className="fr-sb-ct full-width px-xl py-lg">
        <SkeletonText variant="heading" size="xl" />
        <div className="fr-ct-ct">
          <SkeletonIcon className="mx-sm" />
          <SkeletonIcon className="mx-sm" />
          <SkeletonIcon className="mx-sm" />
        </div>
      </div>
      <div className="fr-fs-ct py-md px-xl">
        <SkeletonIcon size="xl" />
        <SkeletonText size="xs" className="ml-md" />
      </div>
      <div className="fc-fs-fs px-xl full-width">
        <SkeletonText size="xxl" className="mb-md" />
        <SkeletonText size="xxl" className="mb-md" />
        <SkeletonText size="xxl" className="mb-md" />
      </div>
    </div>
  );
};
