import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import queryString from "query-string";
import MyOffCanvas from "./MyOffCanvas";

import paypal from "../../assets/symbols/paypal2.png";
import applepay from "../../assets/symbols/applepay.png";
import cc from "../../assets/symbols/cc.png";
import { Link } from "react-router-dom";
import SeatMap from "./SeatMap";
import Caption from "./Caption";
import "./buy.css";

const Buy = () => {
  //   const [show, setShow] = useState([]);
  const [show, setShow] = useState([]);

  const [myPayment, setMyPayment] = useState("");

  const [showError, setShowError] = useState(false);
  const [booking, setBooking] = useState([]);

  const handleBookingChange = (newBooking) => {
    setBooking(newBooking);
  };

  useEffect(() => {
    async function fetchShow() {
      const query = queryString.parse(window.location.search);
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
    if (myPayment === "" && booking.length === 0) {
      setShowError(true);
      console.log(booking);
      return;
    }
  };

  return (
    <div className="buy">
      <MyOffCanvas />

      <h2>Acquista il tuo biglietto</h2>
      <div className="container">
        <Caption />
        <div className="divSeatAndPay">
          {show.movie && <h4>{show.movie.title}</h4>}

          <h4>
            {show.day} - {show.time}
          </h4>

          {show.auditorium && <h5>{show.auditorium.name}</h5>}

          <form onSubmit={handleSubmit}>
            {/* TODO separare component*/}
            {show.auditorium && (
              <SeatMap
                auditoriumSeats={show.auditorium.seat}
                onBookingChange={handleBookingChange}
              />
            )}
            <div className="choosePayment">
              <p>Scegli il metodo di pagamento:</p>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="CreditCard"
                  onChange={(e) => setMyPayment(e.target.value)}
                />
                <label htmlFor="creditCard">Carta di credito</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="PayPal"
                  onChange={(e) => setMyPayment(e.target.value)}
                />
                <label htmlFor="payPal">PayPal</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="ApplePay"
                  onChange={(e) => setMyPayment(e.target.value)}
                />
                <label htmlFor="applePay">Apple Pay</label>
              </div>
              {
                <p className="myPayment">
                  {myPayment === "CreditCard" && (
                    <img src={cc} alt="CreditCard" className="creditCard" />
                  )}
                </p>
              }
              {
                <p className="myPayment">
                  {myPayment === "PayPal" && (
                    <img src={paypal} alt="PayPal" className="paypal" />
                  )}
                </p>
              }{" "}
              {
                <p className="myPayment">
                  {myPayment === "ApplePay" && (
                    <img src={applepay} alt="ApplePay" className="applepay" />
                  )}
                </p>
              }
            </div>

            <Button type="submit" variant="light">
              <Link to="/typ">Conferma</Link>
            </Button>
            {showError && (
              <p className="error">Seleziona il metodo di pagamento</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Buy;
