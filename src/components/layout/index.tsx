import React, { FC } from "react";
import Navbar from "@/components/navbar";

interface MyButtonProps {
  children?: React.ReactNode;
}

const Layout: FC<MyButtonProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
