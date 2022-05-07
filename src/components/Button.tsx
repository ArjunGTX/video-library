import React from "react";
import { useNavigate } from "react-router-dom";
import { Color, Size } from "../model/type";
import clsx from "clsx";

interface Props {
  className?: string;
  variant?: "plain" | "contained" | "outlined" | "icon";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  to?: string;
  color?: Color;
  size?: Size;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  className,
  variant,
  children,
  onClick,
  to,
  color,
  size,
  type,
  disabled,
}) => {
  const navigate = useNavigate();

  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(
        "br-sm font-medium fr-ct-ct",
        color
          ? variant === "plain" || variant === "icon"
            ? `txt-${color} hover-medium`
            : variant === "outlined"
            ? `bd-${color} txt-${color} hover-${color}-outlined`
            : `bg-${color} hover-${color} txt-${color}`
          : variant === "plain" || variant === "icon"
          ? "txt-light hover-medium"
          : variant === "outlined"
          ? "bd-primary txt-primary hover-primary-outlined"
          : "bg-primary hover-primary txt-secondary bd-primary",
        size ? `txt-${size}` : "txt-xs",
        variant === "icon" ? (size ? `p-${size}` : "p-xs") : `px-lg py-xs`,
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
