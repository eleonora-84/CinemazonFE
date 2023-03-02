import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";
import './moviecard.css'

const fetchMovies = async () => {
  return fetch("http://localhost:8080/api/movies/all/sorted")
}

export async function movieLoader(){
  const movies = await fetchMovies()
    .then(res => res.json());
    console.log(movies);
    return movies;
}

const AllMovies = () => {
  const movieData = useLoaderData();
  const [movie, setMovie] = useState(movieData);

  return (
    <div className="allMovies">
      {console.log(movie.map((m) => m.title))}
      {movie.map((m, index) => (
        <Movie title={m.title} director={m.director} duration={m.duration} key={index} plot={m.plot} moviePoster={m.moviePoster} />
      ))}
      
    </div>
  );
};
export default AllMovies;
