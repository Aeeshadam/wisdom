import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handletoggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full h-max lg:w-96 lg:h-screen bg-white  p-8">
      <div className="flex items-center justify-between">
        <Logo />
        <Menu toggleMenu={() => handletoggle()} className="md:hidden" />
      </div>
      <Nav isOpen={isOpen} />
    </div>
  );
};
export default Sidebar;
