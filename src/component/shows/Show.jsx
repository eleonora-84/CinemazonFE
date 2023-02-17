import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
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
  );
};
export default Show;
