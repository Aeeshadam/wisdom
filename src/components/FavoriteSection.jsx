import { useEffect, useState } from "react";
import { useDictionary } from "./DictionaryContext";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Favorites = () => {
  const { faves, deleteFave, deleteAllFaves } = useDictionary();
  return (
    <div className="section">
      <div className="card">
        <div className="flex justify-between items-center">
          <h3 className="mb-4">Favourite Words</h3>
          {faves.length > 0 && (
            <button
              className="text-red-500 py-2 px-6 border-red-100 border-2 rounded-lg text-2xl hover:bg-red-100 cursor-pointer transition "
              onClick={deleteAllFaves}
            >
              Delete all
            </button>
          )}
        </div>
        <ul>
          {faves.map((fave) => (
            <li
              key={uuidv4()}
              className="border border-violet-100 rounded-lg p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <p className="capitalize"> {fave.word}</p>

                <p className="text-gray-500 italic text-2xl">
                  {fave.meanings[0].definitions[0].definition}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteFave(fave)}
                className="cursor-pointer text-red-400 hover:text-red-600 transition"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Favorites;
