import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./moviecard.css";

const Movie = (props) => {
  return (
    <>
      <Card className="singleCard">
        <img className="cardImg" variant="top" src={props.moviePoster} loading="lazy" />
        <Card.Body className="cardBody d-flex flex-column justify-content-end">
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Footer className="">
            <Button variant="light">
              <Link to={`/moviecard/${props.title}`}>
                {console.log(props.title)}
                Scheda completa
              </Link>
            </Button>
            <Button variant="light">
              <Link to={`/showcard?movie=${props.title}`}>
                Vedi spettacoli
              </Link>
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
export default Movie;
