import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">

      <Routes>

        <Route
          path="/"
          element={
            <>
              <h1>Movie List</h1>

              <MovieList />

              <button
                className="add-button"
                onClick={() => setShowForm(!showForm)}
              >
                Add New Movie
              </button>

              {showForm && <AddMovie />}
            </>
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

      </Routes>

    </div>
  );
}

export default App;