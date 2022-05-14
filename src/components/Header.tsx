import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Logo } from "./Logo";
import { TextInput } from "./TextInput";
import { Avatar } from "./Avatar";
import { useAuth, useFilter } from "../context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Path, ToastSuccess } from "../util/constant";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { auth, setAuth } = useAuth();
  const { query, onQueryChange } = useFilter();

  const handleLogout = () => {
    setAuth(null);
    navigate(Path.LOGIN);
    toast.success(ToastSuccess.LOG_OUT);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onQueryChange(e.target.value);

  return (
    <header
      className={clsx(
        " full-width pos-fix z-300 px-xl py-lg fr-sb-ct  bg-secondary-dark",
        className
      )}
    >
      <Logo className="txt-xxl mx-xl" />
      {pathname !== Path.PROFILE && (
        <div className="fr-ct-ct half-width search px-xl">
          <TextInput
            value={query}
            onChange={handleSearchChange}
            placeholder="Search Videos..."
            className="txt-light"
          >
            <button className="txt-light hover-icon-primary fr-ct-ct">
              <GoSearch className="txt-sm" />
            </button>
          </TextInput>
        </div>
      )}
      <div className="fr-ct-ct">
        {auth?.isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="txt-light hover-icon-primary fr-ct-ct txt-xl mx-md"
          >
            <BiLogOut />
          </button>
        ) : (
          <Link
            to={Path.LOGIN}
            className="txt-light hover-icon-primary fr-ct-ct txt-xl mx-md"
          >
            <BiLogIn />
          </Link>
        )}
        <button
          onClick={() => auth?.isLoggedIn && navigate(Path.PROFILE)}
          className="txt-light mx-sm fr-ct-ct"
        >
          {auth?.isLoggedIn ? (
            <Avatar name={auth?.firstName} />
          ) : (
            <FaUserCircle className="txt-lg" />
          )}
        </button>
      </div>
    </header>
  );
};
