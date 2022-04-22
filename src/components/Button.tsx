import React from "react";
import { useNavigate } from "react-router-dom";
import { Color, Size } from "../model/type";
import combineClasses from "clsx";

interface Props {
  className?: string;
  variant?: "plain" | "contained" | "outlined";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  to?: string;
  color?: Color;
  size?: Size;
}

export const Button: React.FC<Props> = ({
  className,
  variant,
  children,
  onClick,
  to,
  color,
  size,
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={combineClasses(
        "px-lg py-xs br-sm font-medium fr-ct-ct",
        color
          ? variant === "contained"
            ? `bg-${color}`
            : variant === "outlined"
            ? `bd-${color} txt-${color}`
            : `txt-${color} font-bold`
          : "bg-primary txt-secondary",
        size ? `txt-${size}` : "txt-xs",
        className
      )}
      onClick={(e) => {
        onClick && onClick(e);
        to && navigate(to);
      }}
    >
      {children}
    </button>
  );
};
