import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./showcard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = () => {
  const [show, setShow] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchShowsByMovieTitle() {
      const query = queryString.parse(window.location.search);
      const movie = query.movie;
      fetch(`http://localhost:8080/api/shows/movie?title=${movie}`)
        .then((response) => response.json())
        .then((data) => {
          setShow(data);
        })
    }
    fetchShowsByMovieTitle();
  }, []);

  return (
    <div className="d-grid justify-content-center text-center">
      {(show.length === 0) && (
        <div className="showError">
          Non ci sono spettacoli disponibili per il film selezionato.
          <br />
          <Button variant="light" onClick={() => navigate(-1)}>
            Indietro
          </Button>
        </div>
      )}
      {show.map((s) => {
        return (
          <div className="showList" key={s.id}>
            <h2>{s.movie.title}</h2>

            <div className="showItem">Giorno: {s.day}</div>
            <div className="showItem">Ora: {s.time}</div>
            <div className="showItem">{s.auditorium.name}</div>

            <div>
              <Link
                to={`/buy?title=${s.movie.title}&day=${s.day}&time=${s.time}`}
              >
                <Button variant="light">Acquista</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCard;
