import free from "../../assets/free.jpg";
import taken from "../../assets/taken.jpg";
import "./showcard.css";

const Caption = () => {
  return (
    <div className="caption">
      Legenda:
        <br />
        <img src={free} alt="Posto libero" className="seat" /> Posto libero
        <br />
        <img src={taken} alt="Posto selezionato" className="seat" /> Posto
        selezionato
    </div>
  );
};
export default Caption;
