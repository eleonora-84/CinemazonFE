import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "../../styles/admin.css";

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
      const response = await fetch("http://localhost:8080/api/movies/all");
      const data = await response.json();
      setAllMovies(data);
      console.log(data);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    async function fetchAuditoriums() {
      const response = await fetch("http://localhost:8080/api/auditoriums/all");
      const data = await response.json();
      setAllAuditoriums(data);
      console.log(data);
    }
    fetchAuditoriums();
  }, []);

  const dateFormat = () => {
      const parts = day.split("-");
      const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
      console.log(formattedDate);
      console.log(typeof formattedDate);
      return formattedDate;
  }

  return (
    <form className="addShowsForm" onSubmit={handleAddShow}>
      
      <label htmlFor="inputMovie">Film: </label>
      <select
        name="allMovieTitles"
        id="allMovieTitles"
        onChange={(e) => setMovie(e.target.value)}
      >
      <option value="Scegli">Scegli il film</option>
        {allMovies.map((m) => (
          
          <option key={m.id} value={m.title}>{m.title}</option>
        ))}
      </select>
      


      <label htmlFor="inputAuditorium">Sala: </label>
      <select
        name="allAuditoriums"
        id="allAuditoriums"
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
