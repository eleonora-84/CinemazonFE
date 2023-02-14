import { useEffect, useState } from "react";
import queryString from "query-string";

import "../styles/card.css";

const MovieCard = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMoviesByTitle() {
      const query = queryString.parse(window.location.search);
      const title = query.title;
      const response = await fetch(`http://localhost:8080/api/movies/?title=${title}`);
      const data = await response.json();
      setMovie(data);
    }
    fetchMoviesByTitle();

   
  }, []);

  return (
    <>
      <h2>{movie.title}</h2>
      <p>Regia: {movie.director}</p>
      <p>Durata: {movie.duration}</p>
      <p>Trama: </p>
    </>
  );
};

export default MovieCard;