import { useDictionary } from "./DictionaryContext";

const NoResults = () => {
  const { results, word } = useDictionary();
  return <div className="card">No results found for {word} 🙁</div>;
};
export default NoResults;
