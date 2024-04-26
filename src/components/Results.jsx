import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import { useDictionary } from "./DictionaryContext";

export const Results = () => {
  const { results } = useDictionary();

  if (results && results.phonetics && results.phonetics.length > 0) {
    return (
      <>
        <Phonetics />
        <Meanings />
        <Synonyms />
        <Antonyms />
      </>
    );
  }
};
