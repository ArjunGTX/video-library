import clsx from "clsx";
import { Size } from "../model/type";

interface Props {
  className?: string;
  variant?: "dark" | "medium" | "light";
  size?: Size;
}

export const Loader: React.FC<Props> = ({ className, size, variant }) => {
  return (
    <div
      className={clsx(
        "pos-fix loader bg-backdrop fr-ct-ct z-400",
        variant && `backdrop-${variant}`,
        className
      )}
    >
      <div
        className={clsx("spinner", size ? `spinner-${size}` : "spinner-xl")}
      ></div>
    </div>
  );
};
