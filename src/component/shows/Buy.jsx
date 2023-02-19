import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import queryString from "query-string";
import MyOffCanvas from "./MyOffCanvas";

import "../../styles/show.css";
import paypal from "../../assets/symbols/paypal2.png";
import applepay from "../../assets/symbols/applepay.png";
import cc from "../../assets/symbols/cc.png";
import { Link } from "react-router-dom";

const Buy = () => {
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

      <h2>Acquista il tuo biglietto</h2>
      <div className="container">
        <div className="divSeatAndPay">
          {show.movie && <h4>{show.movie.title}</h4>}

          <h4>
            {show.day} - {show.time}
          </h4>
          
          {show.auditorium && <h5>{show.auditorium.name}</h5> }
          
          <form onSubmit={handleSubmit}>
            {/* TODO separare component*/}

            <p className="chooseSeat">
              Scegli il posto
              <select
                name="seatChoosen"
                className="select"
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
            {<p>Posto {mySeat}</p>}
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
      </div>
    </div>
  );
};
export default Buy;
