import { useDictionary } from "./DictionaryContext";

const Meanings = () => {
  const { results } = useDictionary();
  const meanings = results?.meanings;
  if (!meanings) return null;
  return (
    <>
      {meanings.map((meaning, index) => (
        <div key={index} className="card">
          <h3 className="capitalize mb-4">{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((definition, index) => (
              <li key={index} className="text-gray-500 mb-2">
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
