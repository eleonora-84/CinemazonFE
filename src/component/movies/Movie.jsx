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
        <Card.Img variant="top" src={props.moviePoster} />
        <Card.Body>
          
          <Card.Title>{props.title}</Card.Title>
         
          <div className="text-center buttons">
            <Button variant="light">
              <NavLink to={`/moviecard?title=${props.title}`}>
                Scheda completa
              </NavLink>
            </Button>
            <Button variant="light">
              <NavLink to={`/showcard?movie=${props.title}`}>Vedi spettacoli</NavLink>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Movie;


