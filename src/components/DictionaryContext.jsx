import { createContext, useContext, useEffect, useState } from "react";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showNoResultsAlert, setShowNoResultsAlert] = useState(false);
  const [faves, setFaves] = useState(() =>
    JSON.parse(localStorage.getItem("faves") || "[]")
  );

  //function to toggle mobile nav
  function handletoggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        fetchWord();
        fetchPictures();
      } else {
        // Reset the showNoResultsAlert state when typing to search another word
        setShowNoResultsAlert(false);
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
      if (!word) {
        console.error("Search is null");
        return;
      }
      setIsLoading(true);
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
        setShowNoResultsAlert(true);
        setIsLoading(false); // Set loading to false since there's no response
        return;
      }
      const data = await response.json();
      setPictures(data.photos);
    } catch (error) {
      console.error("Unhandled exception: ", error);
      alert("There was an error loading pictures");
    } finally {
      setIsLoading(false);
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

      if (!response.ok) {
        setShowNoResultsAlert(true);
        setIsLoading(false); // Set loading to false since there's no response
        return;
      }

      const data = await response.json();
      setResults(data[0]);

      setResults(data[0]);
    } catch (error) {
      alert("There was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  //function to add to faves
  const addToFave = (newFave) => {
    if (!newFave) return;

    setFaves((prevFaves) => {
      const updatedFaves = [...prevFaves, newFave];

      localStorage.setItem("faves", JSON.stringify(updatedFaves));
      return updatedFaves;
    });
  };

  useEffect(() => {
    const storedFaves = localStorage.getItem("faves");
    if (storedFaves) {
      setFaves(JSON.parse(storedFaves));
    }
  }, [word]);

  const deleteFave = (fave) => {
    setFaves((prevFaves) => {
      const updatedFaves = prevFaves.filter((f) => f.word !== fave.word);
      localStorage.setItem("faves", JSON.stringify(updatedFaves));
      return updatedFaves;
    });
  };

  const deleteAllFaves = () => {
    setFaves([]);
    localStorage.removeItem("faves");
  };

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
        showNoResultsAlert,
        addToFave,
        faves,
        deleteFave,
        deleteAllFaves,
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
