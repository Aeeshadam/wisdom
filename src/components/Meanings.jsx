import { v4 as uuidv4 } from "uuid";
import { useDictionary } from "./DictionaryContext";

const Meanings = () => {
  const { results } = useDictionary();
  const meanings = results?.meanings;
  if (!meanings) return null;
  return (
    <>
      {meanings.map((meaning) => (
        <div key={uuidv4()} className="card">
          <h3 className="capitalize mb-4">{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((definition) => (
              <li key={uuidv4()} className="text-gray-500 mb-2">
                <p> {definition.definition} </p>
                <p className="text-gray-400 italic mb-8 text-2xl">
                  {definition.example && `Example: ${definition.example}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
export default Meanings;
