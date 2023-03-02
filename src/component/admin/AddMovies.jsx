import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./admin.css";

const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [plot, setPlot] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [threeD, setThreeD] = useState(false);
  const [inserted, setInserted] = useState(false);

  const clearInputs = () => {
    setTitle("");
    setDirector("");
    setDuration("");
    setPlot("");
    setMoviePoster("");
  };

  const handleCheck = (e) => {
    console.log(e);
    setThreeD(e.target.checked);
    console.log(threeD);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie({
      title: title,
      director: director,
      duration: duration,
      plot: plot,
      moviePoster: moviePoster,
      threeD: threeD,
    });
    clearInputs();
    setInserted(true);
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
    <div>
      <form className="addMoviesForm" onSubmit={handleAddMovie}>
        <label htmlFor="inputTitle">Titolo: </label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputTitle"
          placeholder="Titolo del film"
        />

        <label htmlFor="inputDirector">Regia: </label>
        <input
          value={director}
          onChange={(e) => {
            setDirector(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputDirector"
          placeholder="Regia"
        />

        <label htmlFor="inputDuration">Durata: </label>
        <input
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value), setInserted(false);
          }}
          type="number"
          id="inputDuration"
          placeholder="Durata in minuti"
        />

        <label htmlFor="inputPlot">Trama: </label>
        <textarea
          value={plot}
          onChange={(e) => {
            setPlot(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputPlot"
          placeholder="Trama"
          rows="3"
        />

        <label htmlFor="inputPoster">Locandina: </label>
        <input
          value={moviePoster}
          onChange={(e) => {
            setMoviePoster(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputMoviePoster"
          placeholder="Url locandina"
        />

        <label htmlFor="input3D">
          3D
          <input
            type="checkbox"
            name="threeD"
            onChange={handleCheck}
          />
        </label>

        {/* Mancano properties (3D, 4K, etc) */}

        <Button variant="light" type="submit">
          Inserisci film
        </Button>
      </form>
      {inserted && <div className="inserted">Film inserito con successo!</div>}
    </div>
  );
};
export default AddMovies;
