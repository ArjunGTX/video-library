import clsx from "clsx";
import React from "react";
import { Size } from "../../model/type";

interface Props {
  className?: string;
  size?: "xxl" | Size;
  variant?: "heading" | "paragraph";
}

export const SkeletonText: React.FC<Props> = ({ className, size, variant }) => {
  return (
    <div
      className={clsx(
        "br-md skeleton ",
        variant === "heading"
          ? size
            ? `heading-${size}`
            : "heading-md"
          : size
          ? `text-${size}`
          : "text-md",
        className
      )}
    ></div>
  );
};
