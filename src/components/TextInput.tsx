import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "password" | "number" | "email";
  id?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => any;
  children?: React.ReactNode;
}

export const TextInput: React.FC<Props> = ({
  className,
  id,
  type,
  value,
  placeholder,
  disabled,
  autoFocus,
  autoComplete,
  children,
  min,
  max,
  onChange,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "py-sm px-xl txt-xs br-sm bd-light full-width fr-fs-ct",
        disabled && "txt-disabled",
        className
      )}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        id={id}
        className="full-width"
      />
      {children}
    </div>
  );
};
