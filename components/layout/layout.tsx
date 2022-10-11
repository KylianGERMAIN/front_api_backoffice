import React from "react";
import Header from "../header/header";

interface Props {
  children: JSX.Element | JSX.Element[];
  paddingBottom?: boolean;
  lang: any;
}

const Layout = ({ children, paddingBottom = false, lang }: Props) => (
  <div className="">
    <Header />

    {children}

    {/* <Footer customClassName={paddingBottom ? 'mt-10' : ''} /> */}
  </div>
);

export default Layout;
