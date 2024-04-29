import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useDictionary } from "./DictionaryContext";

const Phonetics = () => {
  const { results, isLoading, addToFave } = useDictionary();
  const { word, phonetics, meanings } = results;

  const playAudio = () => {
    let audioUrl = "";
    for (let i = 0; i < results.phonetics.length; i++) {
      if (results.phonetics[i].audio) {
        audioUrl = results.phonetics[i].audio;
        break;
      }
    }
    if (audioUrl !== "") {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      alert("No audio available");
    }
  };

  if (!phonetics) return null;
  return (
    <div className="card flex flex-wrap items-center justify-between">
      <div>
        <h2 className="capitalize">{word}</h2>
        <p className="text-gray-500 mt-6">{phonetics[0].text}</p>
      </div>
      <div className="flex items-center text-xl lg:text-2xl">
        <button
          className="py-2 px-4 border border-violet-600 rounded-lg mr-4  hover:bg-violet-200 transition flex-wrap"
          onClick={() => addToFave(results)}
        >
          Add {word} to favorites
        </button>
        <FontAwesomeIcon
          onClick={playAudio}
          icon={faPlay}
          className="text-5xl text-violet-400 cursor-pointer hover:text-violet-600 ease-in duration-500 "
        />
      </div>
    </div>
  );
};
export default Phonetics;
