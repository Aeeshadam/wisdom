import React from "react";
import { useDictionary } from "./DictionaryContext";

const Antonyms = () => {
  const { results } = useDictionary();
  const meanings = results?.meanings;

  if (!meanings) return null;
  const antonymsArray = meanings.map((meaning) => meaning.antonyms).flat();
  if (antonymsArray.length === 0) return null;
  return (
    <div className="card">
      <h3 className="capitalize mb-4">Antonyms</h3>
      {meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          {meaning.antonyms.map((antonym, index) => (
            <React.Fragment key={antonym}>
              <p className="inline text-gray-500 mb-2">{antonym}</p>
              {index < meaning.antonyms.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Antonyms;
