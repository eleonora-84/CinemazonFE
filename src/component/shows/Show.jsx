import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./showcard.css";

const Show = (props) => {
  return (
    <Card className="singleCard">
      <Card.Title className="cardTitle">{props.title}
      </Card.Title>
      <Card.Body className="cardBody d-flex flex-column justify-content-end">
        <Card.Text>Giorno: {props.day}</Card.Text>
        <Card.Text>Ora: {props.time}</Card.Text>
        <div className="text-center buttons">
          <Button variant="light">
            <Link to={`/moviecard/${props.title}`}>
              Scheda completa
            </Link>
          </Button>
          <Button variant="light">
          <Link to={`/buy?title=${props.title}&day=${props.day}&time=${props.time}`}>
            Acquista</Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default Show;
