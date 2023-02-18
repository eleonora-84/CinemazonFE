import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../styles/card.css";

const Show = (props) => {
  return (
    <Card className="singleCard">
      {/* TODO sistemare img */}
      <Card.Title className="title">{props.title}

      </Card.Title>
      <Card.Body className="">
        <Card.Text>Giorno: {props.day}</Card.Text>
        <Card.Text>Ora: {props.time}</Card.Text>
        <div className="text-center buttons">
          <Button variant="light">
            <Link to={`/moviecard?title=${props.title}`}>
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
