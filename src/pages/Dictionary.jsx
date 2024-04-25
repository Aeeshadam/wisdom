import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DictionarySection from "../components/DictionarySection";
import { Results } from "../components/Results";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        fetchWord();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [word]);

  async function fetchWord() {
    try {
      if (!word) {
        console.error("Word is null");
        return;
      }

      setIsLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response) {
        console.error("Response is null");
        return;
      }

      const data = await response.json();

      if (!data) {
        console.error("Data is null");
        return;
      }
      setResults(data[0]);
    } catch (error) {
      console.error("Unhandled exception: ", error);
      alert("There was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    console.log(results); // Moved console log to a separate useEffect
  }, [results]);

  return (
    <div className="w-full  bg-violet-50 flex flex-col lg:flex-row ">
      <Sidebar />
      <DictionarySection results={results} word={word} setWord={setWord} />
    </div>
  );
};
export default Dictionary;
