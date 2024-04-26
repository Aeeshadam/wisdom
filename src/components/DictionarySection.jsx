import PicturesGallery from "./Pictures";
import Pictures from "./Pictures";
import { Results } from "./Results";
import { useDictionary } from "./DictionaryContext";

const DictionarySection = () => {
  const { word, setWord } = useDictionary();

  return (
    <div className="section">
      <div className="card">
        <h3 className="mb-4">Which word will you like to look up?</h3>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
          autoFocus={true}
          className="w-full outline-violet-200 p-6 border border-gray-300 rounded-lg placeholder:text-gray-300"
          placeholder="Search..."
        />
      </div>
      <PicturesGallery />
      <Results />
    </div>
  );
};
export default DictionarySection;
