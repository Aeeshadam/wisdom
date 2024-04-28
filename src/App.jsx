import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dictionary from "./pages/Dictionary";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import { DictionaryProvider } from "./components/DictionaryContext";

function App() {
  return (
    <DictionaryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DictionaryProvider>
  );
}
export default App;
