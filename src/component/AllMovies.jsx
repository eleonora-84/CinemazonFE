import { useEffect, useState } from "react";
import Movie from "./Movie";
import '../styles/card.css'

const AllMovies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("http://localhost:8080/api/movies/all");
      const data = await response.json();
      const transfData = data.map((m) => {
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
      });
      setMovie(transfData);
    console.log(transfData);
    }
    fetchMovies();
  }, []);

  // const urlImg = ["https://www.nerdpool.it/wp-content/uploads/2022/06/IWP_EEAAO_poster_web-717x1024.jpg", "https://pad.mymovies.it/filmclub/2019/07/015/locandina.jpg", "https://pad.mymovies.it/filmclub/2010/10/203/locandinapg1.jpg"]

  return (
    <div className="allMovies">
      {movie.map((m, index) => (
        <Movie title={m.title} director={m.director} duration={m.duration} key={index} />
      ))}
    </div>
  );
};
export default AllMovies;
