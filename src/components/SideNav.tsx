import { Button } from "./Button";
import clsx from "clsx";
import { SIDE_NAV_ITEMS } from "../util/constant";

interface Props {
  className?: string;
}

export const SideNav: React.FC<Props> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "pos-fix side-nav shadow-dark txt-light p-xl z-200",
        className
      )}
    >
      {SIDE_NAV_ITEMS.map((item) => (
        <Button
          key={item.item}
          to={item.path}
          variant="icon"
          className="txt-light full-width p-sm fc-ct-ct"
        >
          <item.icon className="txt-xxl" />
          {item.item}
        </Button>
      ))}
    </nav>
  );
};
