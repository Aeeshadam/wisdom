import React from "react";
const Synonyms = ({ meanings }) => {
  if (!meanings) return null;
  const synonymsArray = meanings.map((meaning) => meaning.synonyms).flat();
  if (synonymsArray.length === 0) return null;
  return (
    <div className="card">
      <h3 className="capitalize mb-4">Synonyms</h3>
      {meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          {meaning.synonyms.map((synonym, index) => (
            <React.Fragment key={synonym}>
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
