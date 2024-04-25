import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
export const Results = ({ results }) => {
  const playAudio = () => {
    const audio = new Audio(results.phonetics[0].audio);
    audio.play();
  };
  if (results && results.phonetics && results.phonetics.length > 0) {
    const { word, phonetics, meanings } = results;
    console.log(meanings);
    return (
      <>
        <div className="card flex items-center justify-between">
          <div>
            <h2 className="capitalize">{word}</h2>
            <p className="text-gray-500 mt-6">{phonetics[0].text}</p>
          </div>
          <FontAwesomeIcon
            onClick={playAudio}
            icon={faPlay}
            className="text-5xl text-violet-400 cursor-pointer active:text-violet-600 "
          />
        </div>
        {meanings.map((meaning) => (
          <div key={meaning.partOfSpeech} className="card">
            <h3 className="capitalize mb-4">{meaning.partOfSpeech}</h3>
            <ul>
              {meaning.definitions.map((definition) => (
                <li key={definition.definition} className="text-gray-500 mb-2">
                  <p> {definition.definition} </p>
                  <p className="text-gray-400 italic mb-8 text-2xl">
                    {definition.example && `Example: ${definition.example}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Synonyms meanings={meanings} />
        <Antonyms meanings={meanings} />
      </>
    );
  }
};
