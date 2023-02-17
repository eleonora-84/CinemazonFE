import "../styles/where.css";
import image from "../assets/fake-google-maps.jpg";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Where = () => {
  return (
    <div className="where">
      <h2>COME RAGGIUNGERCI</h2>
      <img src={image} alt="come raggiungerci" />
    </div>
  );
};
export default Where;
