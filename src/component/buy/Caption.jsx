import free from "../../assets/free.png";
import taken from "../../assets/taken.png";
import "./buy.css";

const Caption = () => {
  return (
    <div className="caption">
      Legenda:
      <br />
      <img src={free} alt="Posto libero" className="seat" /> Posto libero
      <br />
      <img src={taken} alt="Posto selezionato" className="seat" /> Posto
      selezionato
      <hr />
      Tariffa unica: €10,00
    </div>
  );
};
export default Caption;
