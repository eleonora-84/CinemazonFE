import { useEffect, useState } from "react";
import queryString from "query-string";
import FourK from "../../assets/symbols/4K.jpeg";
import vm14 from "../../assets/symbols/vm14.png";
import vm18 from "../../assets/symbols/vm18.png";
import Dolby from "../../assets/symbols/dolby-atmos.png";
import OV from "../../assets/symbols/OV.jpg";

import "./moviecard.css";

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MovieCard = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMoviesByTitle() {
      const query = queryString.parse(window.location.search);
      const title = query.title;
      fetch(`http://localhost:8080/api/movies/?title=${title}`)
        .then((response) => response.json())
        .then((data) => setMovie(data));
    }
    fetchMoviesByTitle();
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="cardContainer">
        <div className="posterContainer">
          <img className="poster" src={movie.moviePoster} alt={movie.title} />
        </div>
        <h2>{movie.title}</h2>
        <p>Regia: {movie.director}</p>
        <p>Durata: {movie.duration} minuti</p>
        <p>Trama: {movie.plot}</p>
        <p>Info extra: </p>

        {movie.vm14 && (
          <img
            className="symbols"
            src={vm14}
            alt="Film vietato ai minori di 14 anni"
          />
        )}

        {movie.vm18 && (
          <img
            className="symbols"
            src={vm18}
            alt="Film vietato ai minori di 14 anni"
          />
        )}
        {movie.threeD && <strong className="h1">3D</strong>}

        {movie.fourK && (
          <img
            className="symbols"
            src={FourK}
            alt="Film in UHD (Ultra High Definition)"
          />
        )}

        {movie.dolby && (
          <img className="symbols" src={Dolby} alt="Audio Dolby Atmos" />
        )}

        {movie.ov && <strong className="h1">O.V.</strong>}

        <div>
          <Button variant="light">
            <NavLink to={`/showcard?movie=${movie.title}`}>
              Vedi spettacoli
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
