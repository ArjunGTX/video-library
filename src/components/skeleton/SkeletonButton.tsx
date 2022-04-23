import clsx from "clsx";
import React from "react";
import { Size } from "../../model/type";

interface Props {
  className?: string;
  size?: Size;
}

export const SkeletonButton: React.FC<Props> = ({ className, size }) => {
  return (
    <div
      className={clsx(
        "skeleton btn shadow-dark br-lg",
        size ? `btn-${size}` : "btn-md",
        className
      )}
    ></div>
  );
};
