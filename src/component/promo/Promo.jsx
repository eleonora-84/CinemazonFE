import "../../styles/promo.css";
import Card from 'react-bootstrap/Card';

const Promo = () => {
  return (
    <>
      <div className="promo">
        <Card className="text-center card" bg="dark">
          <Card.Header>CARTA 10 INGRESSI</Card.Header>
          <Card.Body>
            <Card.Title>10 ingressi a prezzo speciale!</Card.Title>
            <Card.Text>
              ...puoi utilizzarla anche per acquisto online!
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">LINK con condizioni d'uso</Card.Footer>
        </Card>

        <Card className="text-center card" bg="dark">
          <Card.Header>GIFT CARD</Card.Header>
          <Card.Body>
            <Card.Title>Regala il grande cinema!</Card.Title>
            <Card.Text>
              ...puoi utilizzarla anche per acquisto online!
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">LINK con condizioni d'uso</Card.Footer>
        </Card>

        <Card className="text-center card" bg="dark">
          <Card.Header>FESTEGGIA IL TUO COMPLEANNO AL CINEMA</Card.Header>
          <Card.Body>
            <Card.Title>Compleanno in Cinemazon</Card.Title>
            <Card.Text>
              Festeggia il tuo compleanno con noi
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">LINK con condizioni d'uso</Card.Footer>
        </Card>
      </div>
    </>
  );
};
export default Promo;
