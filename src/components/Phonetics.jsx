import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Phonetics = ({ word, phonetics, playAudio }) => {
  if (!phonetics) return null;
  return (
    <div className="card flex items-center justify-between">
      <div>
        <h2 className="capitalize">{word}</h2>
        <p className="text-gray-500 mt-6">{phonetics[0].text}</p>
      </div>
      <FontAwesomeIcon
        onClick={playAudio}
        icon={faPlay}
        className="text-5xl text-violet-400 cursor-pointer active:text-violet-600 "
      />
    </div>
  );
};
export default Phonetics;
