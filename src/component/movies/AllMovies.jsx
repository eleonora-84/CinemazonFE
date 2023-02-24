import { useEffect, useState } from "react";
import Movie from "./Movie";
import './moviecard.css'

const AllMovies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      fetch("http://localhost:8080/api/movies/all")
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .then(movie.map((m) => {
        return {
          id: m.id,
          title: m.title,
          director: m.director,
          duration: m.duration,
          plot: m.plot,
          moviePoster: m.moviePoster,
          isVM18: m.isVM18,
          is3D: m.is3D,
          is4K: m.is4K,
          isDolby: m.dolby,
          isOV: m.isOV,
          isVM14: m.isVM14,
        };
      }))
      .then(console.log(movie))
     
    }
    fetchMovies();
  }, []); 
  
// [   [] -> non ho dipendenze  ]
// es [movie] --> ogni volta che viene modificato movie invoca la callback di parametro di useEffect


  return (
    <div className="allMovies">
      
      {movie.map((m, index) => (
        <Movie title={m.title} director={m.director} duration={m.duration} key={index} plot={m.plot} moviePoster={m.moviePoster} />
      ))}
      
    </div>
  );
};
export default AllMovies;
