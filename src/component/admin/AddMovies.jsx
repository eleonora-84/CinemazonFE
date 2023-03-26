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
  const [ov, setOv] = useState(false);
  const [fourK, setFourK] = useState(false);
  const [dolby, setDolby] = useState(false);
  const [rating, setRating] = useState("PERTUTTI");
  const [showError, setShowError] = useState (false);
  const [tempTitle, setTempTitle] = useState("");
  const [plotError, setPlotError] = useState(false);

  const [inserted, setInserted] = useState(false);

  const clearInputs = () => {
    setTempTitle(title);
    setTitle("");
    setDirector("");
    setDuration("");
    setPlot("");
    setMoviePoster("");
    setRating("classificazione");
  };

const checkPlot = () => {
  if (plot.length>1 && plot.length<500){
    console.log("trama OK");
    setPlotError(false);
    return true;
  } else {
    console.log("errore trama");
    setPlotError(true);
    return false;
  }
}

const checkValues = () => {
  if (title === "" || director === "" || duration === ""){
    setShowError(true);
    return false
  } else {
      setShowError(false);
      return true;
    }
}

  const handleCheckThreeD = (e) => {
    console.log(e);
    setThreeD(e.target.checked);
    console.log(threeD);
  };

  const handleCheckOv = (e) => {
    console.log(e);
    setOv(e.target.checked);
    console.log(ov);
  };

  const handleCheckFourK = (e) => {
    console.log(e);
    setFourK(e.target.checked);
    console.log(fourK);
  };

  const handleCheckDolby = (e) => {
    console.log(e);
    setDolby(e.target.checked);
    console.log(dolby);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!checkValues() || !checkPlot()) return;
    addMovie({
      title: title,
      director: director,
      duration: duration,
      plot: plot,
      moviePoster: moviePoster,
      threeD: threeD,
      fourK: fourK,
      ov:ov,
      dolby:dolby,
      rating: rating
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
      .then(checkValues())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mandatory">I campi contrassegnati da * sono obbligatori.</div>
      {showError && <div className="notValid">Inserire tutti i campi obbligatori!</div>}
      {plotError && <div className="notValid">Verifica i caratteri che compongono la trama</div>}
      <form className="addMoviesForm" onSubmit={handleAddMovie}>
        <label htmlFor="inputTitle">* Titolo: </label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputTitle"
          placeholder="Titolo del film"
        />

        <label htmlFor="inputDirector">* Regia: </label>
        <input
          value={director}
          onChange={(e) => {
            setDirector(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputDirector"
          placeholder="Regia"
        />

        <label htmlFor="inputDuration">* Durata: </label>
        <input
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value), setInserted(false);
          }}
          type="number"
          id="inputDuration"
          placeholder="Durata in minuti"
        />

        <label htmlFor="inputPlot">* Trama (max 500 caratteri):</label>
        <textarea
          value={plot}
          onChange={(e) => {
            setPlot(e.target.value), setInserted(false);
          }}
          type="text"
          id="inputPlot"
          placeholder="Trama"
          rows="4"
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

        <div className="properties">
        <label htmlFor="input3D">
          3D
          <input
            type="checkbox"
            name="threeD"
            onChange={handleCheckThreeD}
          />
        </label>

        <label htmlFor="inputOv">
          OV
          <input
            type="checkbox"
            name="ov"
            onChange={handleCheckOv}
          />
        </label>
        <label htmlFor="inputFourK">
          4K
          <input
            type="checkbox"
            name="fourK"
            onChange={handleCheckFourK}
          />
        </label>

        <label htmlFor="inputDolby">
          Dolby
          <input
            type="checkbox"
            name="dolby"
            onChange={handleCheckDolby}
          />
        </label>

        </div>
        <select onChange={(e) => setRating(e.target.value)} >
          <option value="classificazione">
            Classificazione
          </option>
          <option value="PERTUTTI">Per tutti</option>
          <option value="VM14">VM14</option>
          <option value="VM18">VM18</option>
        </select>


        <Button variant="light" type="submit">
          Inserisci film
        </Button>
      </form>
      {inserted && <div className="inserted">Film {tempTitle} inserito con successo!</div>}
    </div>
  );
};
export default AddMovies;
