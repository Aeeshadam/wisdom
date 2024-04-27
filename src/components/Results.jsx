import React from "react";
import Antonyms from "./Antonyms";
import Synonyms from "./Synonyms";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import { useDictionary } from "./DictionaryContext";
import Spinner from "./Spinner";
import NoResults from "./NoResults";

export const Results = () => {
  const { results, isLoading, showNoResultsAlert } = useDictionary();
  if (isLoading) return <Spinner />;

  if (showNoResultsAlert) return <NoResults />;
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
