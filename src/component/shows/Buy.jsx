import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import queryString from "query-string";
import MyOffCanvas from "./MyOffCanvas";
import "./showcard.css";
import paypal from "../../assets/symbols/paypal2.png";
import applepay from "../../assets/symbols/applepay.png";
import cc from "../../assets/symbols/cc.png";
import free from "../../assets/free.jpg";
import taken from "../../assets/taken.jpg";
import { Link } from "react-router-dom";
import SeatMap from "./SeatMap";

const Buy = () => {
  //   const [show, setShow] = useState([]);
  const [show, setShow] = useState([]);

  const [myPayment, setMyPayment] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [booking, setBooking] = useState([]);

  const handleBookingChange = (newBooking) => {
    setBooking(newBooking);
  };

  useEffect(() => {
    async function fetchShow() {
      const query = queryString.parse(window.location.search);
      console.log(query);
      const title = query.title;
      const day = query.day;
      const time = query.time;

      fetch(
        `http://localhost:8080/api/shows/titledaytime?title=${title}&day=${day}&time=${time}`
      )
        .then((response) => response.json())
        .then((data) => setShow(data));
    }
    fetchShow();
    handleBookingChange();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    if (
      myPayment === "Scegli" ||
      myPayment === ""
    ) {
      setShowError(true);
      setShowSummary(false);
      return;
    }
    setShowSummary(true);
  };

  return (
    <div className="buy">
      <MyOffCanvas />

      <h2>Acquista il tuo biglietto</h2>
      <div className="container">
        <div className="divSeatAndPay">
          {show.movie && <h4>{show.movie.title}</h4>}

          <h4>
            {show.day} - {show.time}
          </h4>

          {show.auditorium && <h5>{show.auditorium.name}</h5>}

          <form onSubmit={handleSubmit}>
            {/* TODO separare component*/}
            {show.auditorium && (
              <SeatMap auditoriumSeats={show.auditorium.seat} onBookingChange={handleBookingChange}/>
            )}

            <p className="choosePayment">
              Scegli il metodo di pagamento
              <select
                name="payment"
                className="select"
                onChange={(e) => setMyPayment(e.target.value)}
              >
                <option value="Scegli">Scegli</option>
                <option value="CreditCard">Carta di credito</option>
                <option value="PayPal">PayPal</option>
                <option value="ApplePay">Apple Pay</option>
              </select>
            </p>
            <Button type="submit" variant="light">
              Conferma
            </Button>
            {showError && (
              <p className="error">Seleziona posto e metodo di pagamento</p>
            )}
          </form>
        </div>
        {showSummary && (
          <div className="summary">
            <h5>RIEPILOGO ACQUISTO:</h5>
            {show.movie && <p>{show.movie.title}</p>}
            {show.day && <p>{show.day}</p>}
            {show.time && <p>{show.time}</p>}
            {show.auditorium.name && <p>{show.auditorium.name}</p>}
            {<p>Posto {booking}</p>}
            {
              <p>
                {myPayment === "CreditCard" && (
                  <Link to="/typ">
                    <img src={cc} alt="CreditCard" className="creditCard" />
                  </Link>
                )}
              </p>
            }
            {
              <p>
                {myPayment === "PayPal" && (
                  <Link to="/typ">
                    <img src={paypal} alt="PayPal" className="paypal" />
                  </Link>
                )}
              </p>
            }{" "}
            {
              <p>
                {myPayment === "ApplePay" && (
                  <Link to="/typ">
                    <img src={applepay} alt="ApplePay" className="applepay" />
                  </Link>
                )}
              </p>
            }
            <span>Clicca per confermare il pagamento.</span>
          </div>
        )}
        <div>
          Legenda:
          <div>
            <img src={free} alt="Posto libero" className="seat" /> Posto libero
            <br />
            <img src={taken} alt="Posto selezionato" className="seat" /> Posto selezionato
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buy;
