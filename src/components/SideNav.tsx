import { Button } from "./Button";
import clsx from "clsx";
import { SIDE_NAV_ITEMS } from "../util/constant";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

export const SideNav: React.FC<Props> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "pos-fix side-nav bg-secondary-dark txt-light p-xl z-200 of-auto ",
        className
      )}
    >
      {SIDE_NAV_ITEMS.map((item) => (
        <NavLink
          key={item.item}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              "full-width fc-ct-ct txt-center p-sm fc-ct-ct my-sm hover-icon-primary br-sm",
              isActive ? "txt-primary" : "txt-light"
            )
          }
        >
          <item.icon className="txt-xxl" />
          {item.item}
        </NavLink>
      ))}
    </nav>
  );
};
