import React from "react";
import { Link } from "react-router-dom";
import combineClasses from "clsx";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link to="/">
      <div className={combineClasses("logo txt-primary font-bold", className)}>
        Mad Biker
      </div>
    </Link>
  );
};
