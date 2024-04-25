import { Results } from "./Results";
const DictionarySection = ({ word, setWord, results }) => {
  return (
    <div className="section">
      <div className="card">
        <h3 className="mb-4">Which word will you like to look up?</h3>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          type="text"
          className="w-full outline-violet-200 p-6 border border-gray-300 rounded-lg placeholder:text-gray-300"
          placeholder="Search..."
        />
      </div>
      <Results results={results} />
    </div>
  );
};
export default DictionarySection;
