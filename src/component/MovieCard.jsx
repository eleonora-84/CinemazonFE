import { useEffect, useState } from "react";
import queryString from "query-string";

import "../styles/card.css";

const MovieCard = () => {
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
      <p>Prova: </p>
      <p>Is VM18? {movie.vm18 && " TRUE"}</p>
      <p>Is 3K? {movie.threeK && " TRUE"}</p>
      <p>Is 4K?{movie.fourK && " TRUE"}</p>
      <p>Is Dolby?{movie.dolby && " TRUE"}</p>
      <p>Is OV?{movie.ov && " TRUE"}</p>
      <p>Is VM14?{movie.vm14 && " TRUE"}</p>
    </>
  );
};

export default MovieCard;