import { useEffect, useState } from "react";
import { useDictionary } from "./DictionaryContext";
import { v4 as uuidv4 } from "uuid";

const Favorites = () => {
  const { faves } = useDictionary();
  return (
    <div className="section">
      <div className="card">
        <h3 className="mb-4">Favourite Words</h3>

        <ul>
          {faves.map((fave) => (
            <li
              key={uuidv4()}
              className="border border-violet-100 rounded-lg p-4 mb-4"
            >
              <p> {fave.word}</p>

              <p className="text-gray-500 italic text-2xl">
                {fave.meanings[0].definitions[0].definition}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Favorites;
