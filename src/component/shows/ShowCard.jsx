import { useEffect, useState } from "react";
import queryString from "query-string";
import "../../styles/show.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    async function fetchShowsByMovieTitle() {
      const query = queryString.parse(window.location.search);
      console.log(query);
      const movie = query.movie;
      const response = await fetch(
        `http://localhost:8080/api/shows/?movie=${movie}`
      );
      const data = await response.json();
      setShow(data);
    }
    fetchShowsByMovieTitle();
  }, []);

  return (
    <div className="d-grid justify-content-center text-center">
      {show.map((s) => {
        return (
          <div className="showList" key={s.id}>
            <h2>{s.movie.title}</h2>

            <span className="showItem">Giorno: {s.day}</span>
            <span className="showItem">Ora: {s.time}</span>
            <span className="showItem">{s.auditorium.name}</span>

            <div>
              <Link to={`/buy?title=${s.movie.title}&day=${s.day}&time=${s.time}`}>
                <Button variant="light">
                  Acquista
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCard;
