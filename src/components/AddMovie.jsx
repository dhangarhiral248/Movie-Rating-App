import { useContext, useState } from "react";
import MovieContext from "./MovieContext";

const AddMovie = () => {

  const { movieList, setMovieList } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      id: Date.now(),
      title: title,
      description: description,
      rating: Number(rating),
    };

    setMovieList([...movieList, newMovie]);

    setTitle("");
    setDescription("");
    setRating(1);
  };

  return (
    <div className="add-movie">

      <h2>Add New Movie</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Movie Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <select
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        >
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <button type="submit">
          Add Movie
        </button>

      </form>

    </div>
  );
};

export default AddMovie;