import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }: any) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "scripts/home-c1b793e9.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return <div>{children}</div>;
};

export default Layout;
