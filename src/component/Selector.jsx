import { useEffect, useState } from "react";

const Selector = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/shows/all");
      const data = await response.json();
      setMovie(data);
      console.log(movie);
    }

    fetchData();
  }, []);

  return (
    <>
      <select name="movies">
        {movie.map((m, index) => (
          <option key={index} value={m.movie.title}>
            {m.movie.title}
          </option>
        ))}
      </select>
    </>
  );
};
export default Selector;
