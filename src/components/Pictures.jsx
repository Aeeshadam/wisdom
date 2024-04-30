import { useEffect, useState } from "react";
import { useDictionary } from "../components/DictionaryContext";
import Spinner from "./Spinner";

const Pictures = () => {
  const { word, results, pictures, isLoading } = useDictionary();

  if (isLoading) return <Spinner />;
  if (results && pictures && pictures.length > 0) {
    return (
      <div className="card grid grid-cols-3 gap-4 ">
        {pictures.map((picture, index) => (
          <div key={index}>
            <img
              key={picture.id}
              src={picture.src.landscape}
              alt={picture.alt}
              className="w-full object-cover rounded-lg inline-block "
            />
          </div>
        ))}
      </div>
    );
  }
};
export default Pictures;
