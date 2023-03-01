import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./admin.css";

const DeleteShows = () => {
  const [allShows, setAllShows] = useState([]);
  const [title, setTitle] = useState([]);

  async function fetchShows() {
    fetch("http://localhost:8080/api/shows/all")
      .then((result) => result.json())
      .then((data) => setAllShows(data));
  }

  useEffect(() => {
    fetchShows();
    setTitle("all");
  }, []);

  const handleDeleteShow = async (movie, day, time) => {
    await fetch(
      `http://localhost:8080/api/shows/deletebytitledaytime?title=${movie}&day=${day}&time=${time}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        fetchShows();
      })
      .then(
        () =>
          async function fetchShows() {
            fetch("http://localhost:8080/api/shows/all")
              .then((result) => result.json())
              .then((data) => setAllShows(data));
          }
      )
      .catch((err) => console.log(err));
  };
  const uniqueShows = Array.from(new Set(allShows.map((s) => s.movie.title))).sort();

  return (
    <div className="allShows">
      <div className="filterByShow">
        
        <select
          name="allShows"
          className="allShows"
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="all">Scegli il film</option>
          {uniqueShows.map((d) => {
            return (
              <option key={d} value={d}>
                {d}
              </option>
            );
          })}
        </select>
      </div>
      <div className="allShows">
        {allShows.map((s) => {
          if (s.movie.title == title) {
            return (
              <Card className="deleteSingleCard" key={s.id}>
                <Card.Title className="deletecardTitle">
                  {s.movie.title}
                </Card.Title>
                <Card.Body className="cardBody d-flex flex-column justify-content-end">
                  <Card.Text>Giorno: {s.day}</Card.Text>
                  <Card.Text>Ora: {s.time}</Card.Text>
                  <div className="text-center buttons">
                    <Button
                      variant="light"
                      onClick={() =>
                        handleDeleteShow(s.movie.title, s.day, s.time)
                      }
                    >
                      Cancella
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          } else if (title == "all") {
            return (
              <Card className="deleteSingleCard" key={s.id}>
                <Card.Title className="deletecardTitle">
                  {s.movie.title}
                </Card.Title>
                <Card.Body className="cardBody d-flex flex-column justify-content-end">
                  <Card.Text>Giorno: {s.day}</Card.Text>
                  <Card.Text>Ora: {s.time}</Card.Text>
                  <div className="text-center buttons">
                    <Button
                      variant="light"
                      onClick={() =>
                        handleDeleteShow(s.movie.title, s.day, s.time)
                      }
                    >
                      Cancella
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
};
export default DeleteShows;
