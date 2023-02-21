import { useEffect, useState } from "react";
import free from "../../assets/free.jpg";
import taken from "../../assets/taken.jpg";
import "./showcard.css";

const SeatMap = ({ auditoriumSeats }) => {
  const [seats, setSeats] = useState([]);
  const [srcImg, setSrcImg] = useState(free);
  const [booking, setBooking] = useState([]);
  const [rowA, setRowA] = useState([]);
  const [rowB, setRowB] = useState([]);
  const [rowC, setRowC] = useState([]);
  const [rowD, setRowD] = useState([]);
  const [rowE, setRowE] = useState([]);

  const sliceRows = () => {
    setRowA(auditoriumSeats.slice(0, 10));
    setRowB(auditoriumSeats.slice(10, 20));
    setRowC(auditoriumSeats.slice(20, 30));
    setRowD(auditoriumSeats.slice(30, 40));
    setRowE(auditoriumSeats.slice(40, 50));
  };
  
  useEffect(() => {
    setSeats(auditoriumSeats);
    sliceRows();
  }, []);

  const takeSeatHandler = (seat) => {
    if (booking.includes(seat)) {
      setBooking(booking.filter((selectedSeat) => selectedSeat !== seat)); // filter crea nuovo array con elementi del primo array filtrati secondo la condizione dopo la freccia, ovvero tutti tranne il selezionato se .includes restituisce true
    } else {
      setBooking([...booking, seat]); // altrimenti lo aggiunge
    }

    if (srcImg === free) {
      setSrcImg(taken);
    } else {
      setSrcImg(free);
    }
  };

  return (
    <div>
      <table className="myTable">
        <tbody>
          <tr>
            {rowA.map((r) => (
              <th key={r} value={`${r}`}>
                <img
                  src={booking.includes(r) ? taken : free}
                  alt={r}
                  className="seat"
                  onClick={() => takeSeatHandler(r)}
                />
              </th>
            ))}
          </tr>
          <tr>
            {rowB.map((r) => (
              <th key={r} value={`${r}`}>
                <img
                  src={booking.includes(r) ? taken : free}
                  alt={r}
                  className="seat"
                  onClick={() => takeSeatHandler(r)}
                />
              </th>
            ))}
          </tr>
          <tr>
            {rowC.map((r) => (
              <th key={r} value={`${r}`}>
                <img
                  src={booking.includes(r) ? taken : free}
                  alt={r}
                  className="seat"
                  onClick={() => takeSeatHandler(r)}
                />
              </th>
            ))}
          </tr>
          <tr>
            {rowD.map((r) => (
              <th key={r} value={`${r}`}>
                <img
                  src={booking.includes(r) ? taken : free}
                  alt={r}
                  className="seat"
                  onClick={() => takeSeatHandler(r)}
                />
              </th>
            ))}
          </tr>
          <tr>
            {rowE.map((r) => (
              <th key={r} value={`${r}`}>
                <img
                  src={booking.includes(r) ? taken : free}
                  alt={r}
                  className="seat"
                  onClick={() => takeSeatHandler(r)}
                />
              </th>
            ))}
          </tr>
        </tbody>
      </table>
      <div>Posti selezionati: {booking.join(", ")}</div>
    </div>
  );
};

export default SeatMap;

// ogni posto dell'auditorium è rappresentato da un oggetto con due proprietà: id e taken. id corrisponde all'id del posto e taken indica se il posto è occupato o libero.

// La funzione takeSeatHandler accetta l'id del posto come parametro e utilizza map per trovare il posto corretto nell'array seats e modificarne lo stato.

// Nella parte della tabella, invece di utilizzare la variabile srcImg, viene utilizzato l'array di posti seats per ottenere lo stato dell'immagine corretta per ogni posto.

// Inoltre, l'id del posto viene utilizzato come chiave per ogni immagine.
