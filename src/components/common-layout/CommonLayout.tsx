import { ReactNode } from "react";
import Header from "../header/Header";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component  */}
      <Header />
      {/* main Component  */}
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
