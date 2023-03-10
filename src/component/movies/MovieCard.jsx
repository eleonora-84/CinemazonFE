import { Button } from "react-bootstrap";
import { NavLink, useLoaderData } from "react-router-dom";
import FourK from "../../assets/symbols/4K.jpeg";
import vm14 from "../../assets/symbols/vm14.png";
import vm18 from "../../assets/symbols/vm18.png";
import pertutti from "../../assets/symbols/pertutti.png"
import Dolby from "../../assets/symbols/dolby-atmos.png";
import "./moviecard.css";

const fetchMovie = async (title) => {
  console.log(title);
  return fetch(`http://localhost:8080/api/movies/?title=${title}`);
};
export async function movieCardLoader({ params }) {
  console.log(params);
  const movie = await fetchMovie(params.title).then((res) => res.json());
  console.log(movie);
  return movie;
}

const rating = (rating) => {
  if (rating == "PERTUTTI"){
    return pertutti;
  } else if (rating == "VM14"){
    return vm14
  } else if (rating == "VM18"){
    return vm18
  }
}
const MovieCard = () => {
  const movie = useLoaderData();

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
        <img className="symbols" src={rating(movie.rating)} alt={movie.rating} />
      
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
