import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MyOffCanvas from "./MyOffCanvas";

import "../../styles/show.css";
import paypal from "../../assets/symbols/paypal2.png";
import applepay from "../../assets/symbols/applepay.png";
import cc from "../../assets/symbols/cc.png";

const SingleShow = (props) => {
  //   const [show, setShow] = useState([]);
  const [show, setShow] = useState([]);

  const [mySeat, setMySeat] = useState("");
  const [myPayment, setMyPayment] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const rows = ["A", "B", "C", "D", "E"];
  const seats = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(
        "http://localhost:8080/api/shows/titledaytime?title=Everything%20Everywhere%20all%20at%20once&day=02-03-2023&time=20:30"
      );
      const data = await response.json();
      setShow(data);
    }
    fetchShow();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowError(false);
    if (
      mySeat === "Scegli" ||
      mySeat === "" ||
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

      {/* <h2>{props.movie.title}</h2> da errore undefined */}
      {show.movie && <h2>Acquista il tuo biglietto per {show.movie.title}</h2>}

      <h3>
        {show.day} - {show.time}{" "}
      </h3>
      <form onSubmit={handleSubmit}>
        {/* TODO separare component*/}

        <p className="chooseSeat">
          Scegli il posto
          <select
            name="seatChoosen"
            className="seatsAndPay"
            onChange={(e) => setMySeat(e.target.value)}
          >
            <option value="Scegli">Scegli</option>
            {rows.map((r) =>
              seats.map((s) => (
                <option key={r + s} value={`${r}${s}`}>
                  {`${r}${s}`}
                </option>
              ))
            )}
          </select>
        </p>
        <p className="choosePayment">
          Scegli il metodo di pagamento
          <select
            name="payment"
            className="seatsAndPay"
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
      {showSummary && (
        <div className="summary">
          <p>RIEPILOGO ACQUISTO:</p>
          {show.movie && <p>{show.movie.title}</p>}
          {show.day && <p>{show.day}</p>}
          {show.time && <p>{show.time}</p>}
          {show.auditorium.name && <p>{show.auditorium.name}</p>}
          {<p>Posto {mySeat}</p>}
          {
            <p>
              {myPayment === "CreditCard" && (
                <img src={cc} alt="CreditCard" className="creditCard" />
              )}
            </p>
          }
          {
            <p>
              {myPayment === "PayPal" && (
                <img src={paypal} alt="PayPal" className="paypal" />
              )}
            </p>
          }{" "}
          {
            <p>
              {myPayment === "ApplePay" && (
                <img src={applepay} alt="ApplePay" className="applepay" />
              )}
            </p>
          }
        </div>
      )}
    </div>
  );
};
export default SingleShow;
