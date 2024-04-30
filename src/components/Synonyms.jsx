import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDictionary } from "./DictionaryContext";
const Synonyms = () => {
  const { results } = useDictionary();
  const meanings = results?.meanings;

  if (!meanings) return null;
  const synonymsArray = meanings.map((meaning) => meaning.synonyms).flat();
  if (synonymsArray.length === 0) return null;
  return (
    <div className="card">
      <h3 className="capitalize mb-4">Synonyms</h3>
      {meanings.map((meaning, index) => (
        <div key={index}>
          {meaning.synonyms.map((synonym, index) => (
            <React.Fragment key={index}>
              <p className="inline text-gray-500 mb-2">{synonym}</p>
              {index < meaning.synonyms.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Synonyms;
