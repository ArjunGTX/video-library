import clsx from "clsx";
import React from "react";
import { Size } from "../../model/type";

interface Props {
  className?: string;
  size?: Size;
}

export const SkeletonButton: React.FC<Props> = ({ className, size }) => {
  return (
    <div className={clsx("fr-ct-ct bg-secondary-light py-sm br-lg", className)}>
      <div
        className={clsx(
          "skeleton shadow-dark br-lg",
          size ? `btn-${size}` : "btn-md",
          className
        )}
      ></div>
    </div>
  );
};
