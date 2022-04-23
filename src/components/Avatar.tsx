import clsx from "clsx";
import React from "react";
import { Size } from "../model/type";

interface Props {
  className?: string;
  name: string;
  imageSrc?: string;
  alt?: string;
  size?: Size;
}

export const Avatar: React.FC<Props> = ({
  className,
  name,
  imageSrc,
  alt,
  size,
}) => {
  return (
    <div
      className={clsx(
        "br-round bg-medium p-sm of-hidden fr-ct-ct",
        size ? `avatar-${size}` : "avatar-md",
        className
      )}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className="img-res" />
      ) : (
        name[0].toUpperCase()
      )}
    </div>
  );
};
