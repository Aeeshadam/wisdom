import { useEffect, useState } from "react";
import { useDictionary } from "../components/DictionaryContext";
import Spinner from "./Spinner";

const Pictures = () => {
  const { word, results, pictures, isLoading } = useDictionary();

  if (isLoading) return <Spinner />;
  if (results && pictures && pictures.length > 0) {
    return (
      <div className="card flex flex-wrap">
        {pictures.map((picture) => (
          <div key={picture.id} className="w-1/3 flex flex-wrap py-0 px-2">
            <img
              key={picture.id}
              src={picture.src.landscape}
              alt={picture.alt}
              className="w-full object-cover rounded-lg "
            />
          </div>
        ))}
      </div>
    );
  }
};
export default Pictures;