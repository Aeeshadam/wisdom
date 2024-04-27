import Sidebar from "../components/Sidebar";
import FavoritesSection from "../components/FavoriteSection";

const Favorites = () => {
  return (
    <div className="w-full  bg-violet-50 flex flex-col lg:flex-row">
      <Sidebar />
      <FavoritesSection />
    </div>
  );
};
export default Favorites;
