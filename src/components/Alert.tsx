import React from "react";
import { FiAlertCircle } from "react-icons/fi";

interface Props {
  message: string;
  className?: string;
}

export const Alert: React.FC<Props> = ({ className, message }) => {
  return (
    <div className={`fr-ct-ct input-alert ${className ? className : ""}`}>
      <FiAlertCircle className="txt-md txt-error" />
      <p className="txt-error ml-xs">{message}</p>
    </div>
  );
};
