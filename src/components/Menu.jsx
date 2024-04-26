import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDictionary } from "./DictionaryContext";

const Menu = () => {
  const { handletoggle } = useDictionary();

  return (
    <FontAwesomeIcon
      onClick={() => handletoggle()}
      icon={faBars}
      className="lg:hidden text-4xl cursor-pointer"
    />
  );
};
export default Menu;
