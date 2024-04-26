import { useEffect, useState } from "react";
import { useDictionary } from "./DictionaryContext";

const Favorites = () => {
  const { word } = useDictionary();
  const [faves, setFaves] = useState([]);

  const addFave = (word) => {
    if (!word) return;
    setFaves((prevFaves) => {
      const updatedFaves = [
        ...prevFaves,
        { id: word.id || Math.random(), word: word },
      ];

      localStorage.setItem("faves", JSON.stringify([updatedFaves]));
      console.log(updatedFaves);
      return updatedFaves;
    });
  };

  useEffect(() => {
    const storedFaves = localStorage.getItem("faves");
    if (storedFaves) {
      setFaves(JSON.parse(storedFaves));
    }
  }, []);

  return <div>Favorites</div>;
};
export default Favorites;
