import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dictionary from "./pages/Dictionary";
import History from "./pages/History";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dictionary />} />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
