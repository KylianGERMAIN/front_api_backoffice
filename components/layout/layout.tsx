import React from "react";
import { SideBar } from "../../containers/home/sidebar";
import Header from "../header/header";

interface Props {
  children: JSX.Element | JSX.Element[];
  paddingBottom?: boolean;
  lang: any;
}

const Layout = ({ children, paddingBottom = false, lang }: Props) => (
  <div className="w-full h-full ">
    <div className="sm:hidden grid">
      <Header />
      {children}
    </div>

    <div className="hidden sm:flex">
      <SideBar />
      {children}
    </div>

    {/* <Footer customClassName={paddingBottom ? 'mt-10' : ''} /> */}
  </div>
);

export default Layout;
