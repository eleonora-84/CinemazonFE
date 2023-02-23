import "./promo.css";
import Card from "react-bootstrap/Card";

const Promo = () => {
  return (
    <>
      <div className="promo">
        <Card className="singleCard">
          <Card.Title className="cardTitle">
            CARTA PREPAGATA
          </Card.Title>
          <Card.Body className="cardBody">
            <Card.Text>
              10 Ingressi a prezzo speciale, utilizzabile anche per acquisto online!
            </Card.Text>
            <Card.Text className="bottomText">
              Richiedila in cassa!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="singleCard">
          <Card.Title className="cardTitle">
            GIFT CARD
          </Card.Title>
          <Card.Body className="cardBody">
            <Card.Text>
              Regala il grande cinema! Puoi utilizzarla anche per acquisto online!
            </Card.Text>
            <Card.Text className="bottomText">
              Richiedila in cassa!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="singleCard">
          <Card.Title className="cardTitle">COMPLEANNO IN CINEMAZON</Card.Title>
          <Card.Body className="cardBody">
            <Card.Text>Festeggia il tuo compleanno con noi, avrai sconti esclisivi anche al bar!</Card.Text>
            <Card.Text className="bottomText">
            Chiedi info in cassa.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Promo;
