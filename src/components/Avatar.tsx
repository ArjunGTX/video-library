import clsx from "clsx";
import React from "react";
import { Size } from "../model/type";

interface Props {
  className?: string;
  name?: string;
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
        "br-round bg-medium of-hidden fr-ct-ct txt-light",
        size ? `avatar-${size} txt-${size}` : "avatar-md txt-sm",
        className
      )}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className="img-res" />
      ) : (
        name && name[0].toUpperCase()
      )}
    </div>
  );
};
