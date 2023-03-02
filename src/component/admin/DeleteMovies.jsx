import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./admin.css";

const DeleteMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  async function fetchMovies() {
    fetch("http://localhost:8080/api/movies/all/sorted")
      .then((result) => result.json())
      .then((data) => setAllMovies(data));
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

  return (
    <>
      <div className="allMovies">
        {allMovies.map((m) => {
            return (
              <Card className="deleteSingleCard" key={m.id}>
                <Card.Title className="deletecardTitle">
                  {m.title}
                </Card.Title>
                <Card.Body className="cardBody d-flex flex-column justify-content-end">
                  <div className="text-center buttons">
                    <Button
                      variant="light"
                      onClick={() =>
                        handleDeleteMovie(m.title)
                      }
                    >
                      Cancella
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )
          }) }
      </div>
      {showAlert && <div className="filterByShow">{alert}</div>}
    </>
  );
};
export default DeleteMovies;
