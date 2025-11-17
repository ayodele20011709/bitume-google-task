import React, { useEffect, useState } from "react";
import Home from "./Home";

const Newsfeed = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setFetchError("");
      setArticles([]);

      try {
        const params = new URLSearchParams({ apikey: API_KEY, language: "en" });

        if (searchQuery) params.append("q", searchQuery);
        else if (category && category !== "general") params.append("category", category);
        else params.append("country", "ng");

        const response = await fetch(`https://newsdata.io/api/1/news?${params.toString()}`);
        const data = await response.json();

        const newsList = data.results || [];

        if (!newsList.length) {
          const fallbackRes = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`);
          const fallbackData = await fallbackRes.json();
          setArticles(fallbackData.results || []);
        } else {
          setArticles(newsList);
        }
      } catch (err) {
        setFetchError("Unable to load news right now.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category, searchQuery]);

  if (loading) return <p className="p-5 text-xl">Loading news...</p>;
  if (fetchError) return <p className="p-5 text-xl text-red-500">{fetchError}</p>;
  if (!articles.length) return <p className="p-5 text-xl">No news available.</p>;

  return <Home news={articles} />;
};

export default Newsfeed;
