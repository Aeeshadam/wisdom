import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="fixed lg:sticky top-0 w-full h-max lg:w-96 lg:h-screen bg-white  px-8 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <Menu className="md:hidden" />
      </div>
      <Nav />
    </div>
  );
};
export default Sidebar;
