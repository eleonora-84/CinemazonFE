import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/card.css'

const Movie = (props) => {
  return (
    <>
      {/* <img src={props.poster} alt={props.title} /> */}
      <Card className="singleCard">
        <Card.Img variant="top" src="https://www.nerdpool.it/wp-content/uploads/2022/06/IWP_EEAAO_poster_web-717x1024.jpg" /> 
        {/* TODO sistemare img */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Plot
          </Card.Text>
          <Card.Text>
            Regia: {props.director}
          </Card.Text>
          <Card.Text>
            Durata: {props.duration} minuti
          </Card.Text>
          <Button variant="light">Acquista</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Movie;
