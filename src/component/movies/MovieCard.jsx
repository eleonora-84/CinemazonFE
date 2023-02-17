import { useEffect, useState } from "react";
import queryString from "query-string";
import ThreeD from "../assets/symbols/RealD.png";
import FourK from "../assets/symbols/4K.jpeg";
import vm14 from "../assets/symbols/vm14.png";
import vm18 from "../assets/symbols/vm18.png";
import Dolby from "../assets/symbols/dolby-atmos.png";
import OV from "../assets/symbols/OV.jpg";

import "../styles/card.css";
import { Button } from "react-bootstrap";

const MovieCard = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMoviesByTitle() {
      const query = queryString.parse(window.location.search);
      const title = query.title;
      const response = await fetch(
        `http://localhost:8080/api/movies/?title=${title}`
      );
      const data = await response.json();
      setMovie(data);
    }
    fetchMoviesByTitle();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="cardContainer">
        <div className="posterContainer">
          <img className="poster" src={movie.moviePoster} alt="" />
        </div>
        <h2>{movie.title}</h2>
        <p>Regia: {movie.director}</p>
        <p>Durata: {movie.duration}</p>
        <p>Trama: {movie.plot}</p>
        <p>Info extra: </p>

        <span>
          {movie.vm14 && (
            <img
              className="symbols"
              src={vm14}
              alt="Film vietato ai minori di 14 anni"
            />
          )}
        </span>
        <span>
          {movie.vm18 && (
            <img
              className="symbols"
              src={vm18}
              alt="Film vietato ai minori di 14 anni"
            />
          )}
        </span>
        <span>
          {movie.threeD && (
            <img
              className="symbols"
              src={ThreeD}
              alt="Film disponibile anche in 3D"
            />
          )}
        </span>
        <span>
          {movie.fourK && (
            <img
              className="symbols"
              src={FourK}
              alt="Film in UHD (Ultra High Definition)"
            />
          )}
        </span>
        <span>
          {movie.dolby && (
            <img className="symbols" src={Dolby} alt="Audio Dolby Atmos" />
          )}
        </span>
        <span>
          {movie.ov && (
            <img
              className="symbols"
              src={OV}
              alt="Film disponibile anche in lingua originale"
            />
          )}
        </span>
        <div>
          <Button variant="light">Vedi spettacoli</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
