import { useEffect, useState } from "react";
import queryString from "query-string";

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
      console.log("Shows: " + show);
      console.log(`http://localhost:8080/api/shows/?movie=${movie}`);
    }
    fetchShowsByMovieTitle();
  }, []);
  return (
    <div className="d-grid justify-content-center text-center">
      {show.map((s) => {
        return (
          <div key={s.id}>
            <h2>{s.movie.title}</h2>
            <p>Giorno: {s.day}</p>
            <p>Ora: {s.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCard;
