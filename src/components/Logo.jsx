import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      className="logo lg:ml-6 text-gray-500 font-extrabold flex items-center cursor-pointer"
      to="/"
    >
      <FontAwesomeIcon icon={faPenNib} className=" mx-2" />
      <h1>WISDOM</h1>
    </NavLink>
  );
};
export default Logo;
