import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AdminHome = () => {
  return (
    <div className="adminHome">
      <Button variant="light" className="adminBtn">
        <Link to="/addmovies" className="adminItem">
          Aggiungi Film
        </Link>
      </Button>
      <Button variant="light" className="adminBtn">
        <Link to="/deletemovies" className="adminItem">
          Cancella Film
        </Link>
      </Button>
      <Button variant="light" className="adminBtn">
        <Link to="/addshows" className="adminItem">
          Aggiungi Spettacoli
        </Link>
      </Button>      
      <Button variant="light" className="adminBtn">
        <Link to="/deleteshows" className="adminItem">
          Cancella Spettacoli
        </Link>
      </Button>
    </div>
  );
};
export default AdminHome;
