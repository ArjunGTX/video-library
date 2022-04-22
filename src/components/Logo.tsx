import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Path } from "../util/constant";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link to={Path.HOME}>
      <div className={clsx("logo txt-primary font-bold", className)}>
        Mad Biker
      </div>
    </Link>
  );
};
