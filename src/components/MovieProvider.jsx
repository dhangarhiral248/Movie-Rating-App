import { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import movies from "./data";

const MovieProvider = ({ children }) => {

  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    return savedMovies ? JSON.parse(savedMovies) : movies;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  return (
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;