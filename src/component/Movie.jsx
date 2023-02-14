import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "../styles/card.css";

const Movie = (props) => {
  const movieHandler = () => {
    console.log(props.title);
    return props.title;
  };

  return (
    <>
      {/* <img src={props.poster} alt={props.title} /> */}
      <Card className="singleCard">
        <Card.Img
          variant="top"
          src="https://www.nerdpool.it/wp-content/uploads/2022/06/IWP_EEAAO_poster_web-717x1024.jpg"
        />
        {/* TODO sistemare img */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Plot</Card.Text>
          <Card.Text>Regia: {props.director}</Card.Text>
          <Card.Text>Durata: {props.duration} minuti</Card.Text>
          <Button variant="light">
            <NavLink to={`/moviecard?title=${props.title}`}>
              Scheda completa
            </NavLink>
          </Button>

          <Button variant="light">
            <NavLink to="/">Acquista</NavLink>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Movie;
