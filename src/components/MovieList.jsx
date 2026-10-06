import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "./MovieContext";

const MovieList = () => {

  const { movieList } = useContext(MovieContext);

  return (
    <div className="movie-list">

      {movieList.map((movie) => (
        <div className="movie-row" key={movie.id}>

          <Link
            to={`/movie/${movie.id}`}
            className="movie-name"
          >
            {movie.title}
          </Link>

          <span className="movie-rating">
            {"★".repeat(movie.rating)}
            {"☆".repeat(5 - movie.rating)}
          </span>

        </div>
      ))}

    </div>
  );
};

export default MovieList;