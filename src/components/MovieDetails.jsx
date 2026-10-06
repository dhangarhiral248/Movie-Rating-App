import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieContext from "./MovieContext";

const MovieDetails = () => {
  const { movieList, setMovieList } = useContext(MovieContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movieList.find(
    (movie) => movie.id.toString() === id
  );

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  const handleDelete = () => {
    setMovieList(
      movieList.filter((item) => item.id !== movie.id)
    );

    navigate("/");
  };

  return (
    <div className="movie-details">

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <div className="details-rating">
        {"★".repeat(movie.rating)}
        {"☆".repeat(5 - movie.rating)}
      </div>

      <div className="details-buttons">

        <button
          className="add-details-button"
          onClick={() => navigate("/")}
        >
          Add Movie
        </button>

        <button
          className="delete-button"
          onClick={handleDelete}
        >
          Delete Movie
        </button>

      </div>

    </div>
  );
};

export default MovieDetails;