import clsx from "clsx";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  return (
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