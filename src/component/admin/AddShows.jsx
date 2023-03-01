import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./admin.css";

const AddShows = () => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [allAuditoriums, setAllAuditoriums] = useState([]);
  const [auditorium, setAuditorium] = useState("");

  const clearInputs = () => {
    setDay("");
    setTime("");
    setMovie("");
    setAuditorium("");
  };

  const handleAddShow = (e) => {
    e.preventDefault();
    const movieSelected = allMovies.find((m) => m.title === movie);
    const auditoriumSelected = allAuditoriums.find((a) => a.name === auditorium);
    
    addShow({
      day: dateFormat(day),
      time: time,
      movie: movieSelected,
      auditorium: auditoriumSelected,
    });
    clearInputs();
  };

  const addShow = async (show) => {
    await fetch("http://localhost:8080/api/shows/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(show),
      })
      .then((result) => result.json())
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    async function fetchMovies() {
      fetch("http://localhost:8080/api/movies/all")
      .then((result) => result.json())
      .then((data) => setAllMovies(data))
    }
    async function fetchAuditoriums() {
      fetch("http://localhost:8080/api/auditoriums/all")
      .then((result) => result.json())
      .then((data) => setAllAuditoriums(data))
    }
    fetchMovies();
    fetchAuditoriums();
  }, []);

  const dateFormat = () => {
      const parts = day.split("-");
      const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
      console.log(formattedDate);
      console.log(typeof formattedDate);
      return formattedDate;
  }
  const sortedMovies = Array.from(
    new Set(allMovies.map((m) => m.title))
  ).sort();
  return (
    <form className="addShowsForm" onSubmit={handleAddShow}>
      
      <label htmlFor="inputMovie">Film: </label>
      <select
        name="allMovieTitles"
        className="allMovieTitles"
        onChange={(e) => setMovie(e.target.value)}
      >
      <option value="Scegli">Scegli il film</option>
        {sortedMovies.map((m, index) => (
          <option key={index} value={m}>{m}</option>
        ))}
      </select>
      


      <label htmlFor="inputAuditorium">Sala: </label>
      <select
        name="allAuditoriums"
        className="allAuditoriums"
        onChange={(e) => setAuditorium(e.target.value)}
      >
      <option value="Scegli">Scegli la sala</option>
        {allAuditoriums.map((a) => (
          <option key={a.id} value={a.name}>{a.name}</option>
        ))}
      </select>

      <label htmlFor="inputDay">Giorno: </label>
      <input
        value={day}
        onChange={(e) => setDay(e.target.value)}
        type="date"
        id="inputDate"
      />
      <label htmlFor="inputTime">Ora: </label>
      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="time"
        id="inputTime"
      />
      <Button variant="light" type="submit">
        Inserisci spettacolo
      </Button>
    </form>
  );
};
export default AddShows;
