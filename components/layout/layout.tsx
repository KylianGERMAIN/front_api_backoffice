import React from "react";
import Header from "../../containers/header/header";
import { SideBar } from "../../containers/home/sidebar";

interface Props {
  children: JSX.Element | JSX.Element[];
  paddingBottom?: boolean;
  lang: any;
}

const Layout = ({ children, paddingBottom = false, lang }: Props) => (
  <div className="">
    <div className="headerSection">
      <Header />
      {children}
    </div>

    <div className="sideBarSection">
      <SideBar />
      <div className="minsize"></div>
      {children}
    </div>
  </div>
);

export default Layout;
