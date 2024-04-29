import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      className="ml-6 text-black-600 text-4xl font-extrabold flex cursor-pointer"
      to="/"
    >
      <FontAwesomeIcon icon={faPenNib} className="text-violet-600 mx-2" />
      <h1>WISDOM</h1>
    </NavLink>
  );
};
export default Logo;
