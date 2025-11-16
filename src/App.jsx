import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";

const CategoryPage = () => {
  const { category } = useParams();
  return <Newsfeed category={category} />;
};

const SearchPage = () => {
  const { query } = useParams();
  return <Newsfeed searchQuery={query} />;
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Newsfeed category="general" />} />
        <Route path="/news/:category" element={<CategoryPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
