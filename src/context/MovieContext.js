import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

const API_KEY = "f7d7cc482e0224bd83ee7c012a4a4ffa";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  console.log(movies);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  const addToFavorites = (movie) => {
    let isFavorite = favorites.some((item) => item.id === movie.id);
    if (isFavorite) {
      let newFavorites = favorites.filter((item) => item.id !== movie.id);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      let newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const values = { movies, getMovies, loading, addToFavorites, favorites };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
export default MovieContextProvider;
