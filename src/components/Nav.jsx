import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFloppyDisk,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useDictionary } from "../components/DictionaryContext";

const navItems = [
  { to: "/", icon: faBook, text: "Dictionary" },
  { to: "/history", icon: faFloppyDisk, text: "History" },
  { to: "/favorites", icon: faStar, text: "Favorites" },
];
const Nav = () => {
  const { isOpen } = useDictionary();

  return (
    <div
      className={`text-gray-500 mt-16 ${
        isOpen ? "block" : "hidden"
      } lg:block ease-in duration-700`}
    >
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          style={({ isActive }) => ({ color: isActive ? "#7c3aed" : "" })}
        >
          <div className="duration-700 rounded-l-lg flex items-center m-6 pt-4 w-full hover:text-violet-600">
            <div className="w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p className="ml-4">{item.text}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
