import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ toggleMenu }) => {
  return (
    <FontAwesomeIcon
      onClick={toggleMenu}
      icon={faBars}
      className="lg:hidden text-4xl cursor-pointer"
    />
  );
};
export default Menu;
