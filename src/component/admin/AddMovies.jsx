import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./admin.css";

const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [plot, setPlot] = useState("");
  const [moviePoster, setMoviePoster] = useState("");

  const clearInputs = () => {
    setTitle("");
    setDirector("");
    setDuration("");
    setPlot("");
    setMoviePoster("");
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie({
      title: title,
      director: director,
      duration: duration,
      plot: plot,
      moviePoster: moviePoster,
    });
    clearInputs();
  };

  const addMovie = async (movie) => {
    fetch("http://localhost:8080/api/movies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((result) => result.json())
      .catch((err) => console.log(err));
  };

  return (
    <form className="addMoviesForm" onSubmit={handleAddMovie}>
      <label htmlFor="inputTitle">Titolo: </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="inputTitle"
        placeholder="Titolo del film"
      />

      <label htmlFor="inputDirector">Regia: </label>
      <input
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        type="text"
        id="inputDirector"
        placeholder="Regia"
      />

      <label htmlFor="inputDuration">Durata: </label>
      <input
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        type="number"
        id="inputDuration"
        placeholder="Durata in minuti"
      />

      <label htmlFor="inputPlot">Trama: </label>
      <textarea
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
        type="text"
        id="inputPlot"
        placeholder="Trama"
        rows="3"
      />

      <label htmlFor="inputPoster">Locandina: </label>
      <input
        value={moviePoster}
        onChange={(e) => setMoviePoster(e.target.value)}
        type="text"
        id="inputMoviePoster"
        placeholder="Url locandina"
      />

      {/* Mancano properties (3D, 4K, etc) */}

      <Button variant="light" type="submit">
        Inserisci film
      </Button>
    </form>
  );
};
export default AddMovies;
