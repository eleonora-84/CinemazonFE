import "../styles/where.css";
import image from "../assets/fake-google-maps.jpg";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Where = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <div className="where">
      <h2>COME RAGGIUNGERCI</h2>
      <img src={image} alt="come raggiungerci" />
    </div>
  );
};
export default Where;
