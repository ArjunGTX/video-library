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
        "pos-fix side-nav bg-secondary-dark txt-light p-md z-200 ofx-auto ",
        className
      )}
    >
      {SIDE_NAV_ITEMS.map((item) => (
        <NavLink
          end
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
