import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export const Results = ({ results }) => {
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

  if (results && results.phonetics && results.phonetics.length > 0) {
    const { word, phonetics, meanings } = results;
    return (
      <>
        <Phonetics phonetics={phonetics} word={word} playAudio={playAudio} />
        <Meanings meanings={meanings} />
        <Synonyms meanings={meanings} />
        <Antonyms meanings={meanings} />
      </>
    );
  }
};
