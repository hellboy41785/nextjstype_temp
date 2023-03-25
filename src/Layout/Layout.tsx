import { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  return <>{children}</>;
};

export default Layout;
