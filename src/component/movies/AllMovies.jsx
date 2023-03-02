import { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   async function fetchMovies() {
  //     fetch("http://localhost:8080/api/movies/all/sorted")
  //     .then((response) => response.json())
  //     .then((data) => setMovie(data))
  //     .then(movie.map((m) => {
  //       return {
  //         id: m.id,
  //         title: m.title,
  //         director: m.director,
  //         duration: m.duration,
  //         plot: m.plot,
  //         moviePoster: m.moviePoster,
  //         isVM18: m.isVM18,
  //         is3D: m.is3D,
  //         is4K: m.is4K,
  //         isDolby: m.dolby,
  //         isOV: m.isOV,
  //         isVM14: m.isVM14,
  //       };
  //     }))
  //     .then(console.log(movie))
     
  //   }
  //   fetchMovies();
  // }, []); 
  
// [   [] -> non ho dipendenze  ]
// es [movie] --> ogni volta che viene modificato movie invoca la callback di parametro di useEffect


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
