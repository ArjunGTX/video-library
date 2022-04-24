import clsx from "clsx";
import React from "react";
import { Size } from "../../model/type";

interface Props {
  className?: string;
  size?: Size;
}

export const SkeletonIcon: React.FC<Props> = ({ className, size }) => {
  return (
    <div
      className={clsx(
        "br-round skeleton",
        size ? `avatar-${size}` : "avatar-md",
        className
      )}
    ></div>
  );
};
