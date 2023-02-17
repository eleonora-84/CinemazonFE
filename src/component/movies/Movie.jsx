import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "../../styles/card.css";

const Movie = (props) => {
  return (
    <>
      {/* <img src={props.poster} alt={props.title} /> */}
      <Card className="singleCard">
        {/* TODO sistemare img */}
        <Card.Body className="">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Plot</Card.Text>
          <Card.Text>Regia: {props.director}</Card.Text>
          <Card.Text>Durata: {props.duration} minuti</Card.Text>
          <Card.Text>Trama: {props.plot}</Card.Text>
          <div className="text-center buttons">
            <Button variant="light">
              <NavLink to={`/moviecard?title=${props.title}`}>
                Scheda completa
              </NavLink>
            </Button>
            <Button variant="light">
              <NavLink to={`/showcard?movie=${props.title}`}>Acquista</NavLink>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Movie;
