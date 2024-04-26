import { createContext, useContext, useEffect, useState } from "react";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //function to toggle mobile nav
  function handletoggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        fetchWord();
        fetchPictures();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [word]);

  //function to fetch pictures
  const number = 3;
  async function fetchPictures() {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${word}&per_page=${number}`,
        {
          headers: {
            Authorization:
              "paj3TeL3ZtptV0bGHQmHFiFRYWYWAJAPeRgU0SyLKVYOtjRcwsy7BNOr",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPictures(data.photos);
    } catch (error) {
      console.error("Unhandled exception: ", error);
      alert("There was an error loading pictures");
    }
  }

  //function to fetch word from dictionary API
  async function fetchWord() {
    try {
      if (!word) {
        console.error("Search is null");
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

      setResults(data[0]);
    } catch (error) {
      alert("There was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DictionaryContext.Provider
      value={{
        word,
        setWord,
        results,
        isLoading,
        fetchWord,
        fetchPictures,
        pictures,
        isOpen,
        handletoggle,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}

export { DictionaryProvider, useDictionary };
