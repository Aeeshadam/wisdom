import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDictionary } from "./DictionaryContext";

const Phonetics = () => {
  const { results, addToFave } = useDictionary();
  const { word, phonetics } = results;

  const playAudio = () => {
    const audioUrls = results.phonetics.map((p) => p.audio).filter(Boolean);
    if (audioUrls.length === 0) {
      alert("No audio available");
      return;
    }

    let alertShown = false;

    const playNextAudio = (index) => {
      if (index >= audioUrls.length) {
        if (!alertShown) {
          alert("All audio sources failed");
          alertShown = true;
        }
        return;
      }

      const audio = new Audio(audioUrls[index]);
      let timeout;

      audio.oncanplaythrough = () => {
        clearTimeout(timeout);
        audio.play().catch(() => {
          playNextAudio(index + 1);
        });
      };

      audio.onerror = () => {
        clearTimeout(timeout);
        playNextAudio(index + 1);
      };

      timeout = setTimeout(() => {
        audio.onerror();
      }, 1000);

      audio.load();
    };

    playNextAudio(0);
  };

  if (!phonetics) return null;
  return (
    <div className="card flex flex-wrap items-center justify-between">
      <div>
        <h2 className="capitalize">{word}</h2>
        <p className="text-gray-500 mt-6">{phonetics[0].text}</p>
      </div>
      <div className="flex items-center text-xl lg:text-2xl">
        <button
          className="py-2 px-4 border border-violet-600 rounded-lg mr-4  hover:bg-violet-200 transition flex-wrap"
          onClick={() => addToFave(results)}
        >
          Add {word} to favorites
        </button>
        <FontAwesomeIcon
          onClick={playAudio}
          icon={faPlay}
          className="text-5xl text-violet-400 cursor-pointer hover:text-violet-600 ease-in duration-500 "
        />
      </div>
    </div>
  );
};
export default Phonetics;
