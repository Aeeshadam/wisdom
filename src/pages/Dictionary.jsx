import Sidebar from "../components/Sidebar";
import DictionarySection from "../components/DictionarySection";
import { Results } from "../components/Results";
import { useDictionary } from "../components/DictionaryContext";
import Confirmation from "../components/Confirmation";

const Dictionary = () => {
  return (
    <div className="w-full  bg-violet-50 flex flex-col lg:flex-row ">
      <Sidebar />
      <DictionarySection />
    </div>
  );
};
export default Dictionary;
