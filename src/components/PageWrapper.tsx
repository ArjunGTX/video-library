import clsx from "clsx";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context";
import { Path } from "../util/constant";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

interface Props {
  className?: string;
  children?: React.ReactNode;
  requiresAuth?: boolean;
}

export const PageWrapper: React.FC<Props> = ({
  children,
  className,
  requiresAuth,
}) => {
  const { auth } = useAuth();

  const shouldRedirect = requiresAuth
    ? auth?.isLoggedIn
      ? false
      : true
    : false;

  return shouldRedirect ? (
    <Navigate to={Path.LOGIN} replace />
  ) : (
    <div
      className={clsx(
        "full-page pos-rel fc-fs-fs bg-secondary of-hidden page-wrapper",
        className
      )}
    >
      <Header />
      <SideNav />
      <main className="pos-fix fc-fs-fs of-hidden">{children}</main>
    </div>
  );
};
