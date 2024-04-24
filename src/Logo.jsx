import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="ml-6 text-black-600 text-4xl font-extrabold flex cursor-pointer">
      <FontAwesomeIcon icon={faPenNib} className="text-violet-600 mx-2" />
      <h1>WISDOM</h1>
    </div>
  );
};
export default Logo;
