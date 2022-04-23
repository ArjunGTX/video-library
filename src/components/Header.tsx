import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "./Logo";
import { TextInput } from "./TextInput";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        " full-width pos-fix z-300 px-xl py-lg fr-fs-ct  bg-secondary-dark",
        className
      )}
    >
      <Logo className="txt-xxl mx-xl" />
      <div className="fr-ct-ct half-width search px-xl mx-auto">
        <TextInput placeholder="Search Videos..." className="txt-light">
          <button className="txt-light hover-icon-primary fr-ct-ct">
            <GoSearch className="txt-sm" />
          </button>
        </TextInput>
      </div>
      <div className="fr-ct-ct">
        <button className="txt-light hover-icon-primary fr-ct-ct txt-lg mx-md">
          <FiLogOut />
        </button>
        <button className="txt-light mx-sm fr-ct-ct">
          <Avatar name="john" />
        </button>
      </div>
    </header>
  );
};
