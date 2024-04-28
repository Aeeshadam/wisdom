import PicturesGallery from "./Pictures";
import Pictures from "./Pictures";
import { Results } from "./Results";
import { useDictionary } from "./DictionaryContext";

const DictionarySection = () => {
  const { word, setWord, handleSubmit } = useDictionary();

  return (
    <div className="section">
      <div className="card">
        <h3 className="mb-4">Which word will you like to look up?</h3>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center w-full  p-6 border border-gray-300 rounded-lg placeholder:text-gray-300"
        >
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            type="text"
            autoFocus={true}
            className="w-full outline-none"
            placeholder="Search..."
          />
          <button className="bg-violet-600 py-2 px-6 text-white  border-2 rounded-lg text-2xl hover:bg-violet-500 cursor-pointer transition ">
            Search
          </button>
        </form>
      </div>
      <PicturesGallery />
      <Results />
    </div>
  );
};
export default DictionarySection;
