import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import "./admin.css";

const DeleteMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState([]);

  async function fetchMovies() {
    fetch("http://localhost:8080/api/movies/all")
      .then((result) => result.json())
      .then((data) => setAllMovies(data));
    // .then(
    //   shows.map((s) => {
    //     return {
    //       id: s.id,
    //       day: s.day,
    //       time: s.time,
    //       title: s.movie.title,
    //     };
    //   })
    // );
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDeleteMovie = async (title) => {
    await fetch(
      `http://localhost:8080/api/movies/deletebytitle?title=${title}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(setAlert(`Film ${title} cancellato`))
      .then(setShowAlert(true))
      .then(() => {
        fetchMovies();
      })

      .catch((err) => console.log(err));
  };

  const sortedMovies = Array.from(
    new Set(allMovies.map((m) => m.title))
  ).sort();

  return (
    <>
      <div className="allShows">
        <div className="filterByShow">
          <select
            name="allShows"
            className="allShows"
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="all">Scegli il film</option>
            {sortedMovies.map((m, index) => {
              return (
                <option key={index} value={m}>
                  {m}
                </option>
              );
            })}
          </select>
          <Button variant="light" onClick={() => handleDeleteMovie(title)}>
            Cancella
          </Button>
        </div>
      </div>{" "}
      {showAlert && <div className="filterByShow">{alert}</div>}
    </>
  );
};
export default DeleteMovies;
