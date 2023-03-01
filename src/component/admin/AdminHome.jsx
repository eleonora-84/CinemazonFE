import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="adminHome">
      <Link to="/addmovies" className="adminItem">
        Aggiungi Film
      </Link>
      <strong>||</strong>
      <Link to="/deletemovies" className="adminItem">
        Cancella Film
      </Link>
      <strong className="h1">||</strong>
      <Link to="/addshows" className="adminItem">
        Aggiungi Spettacoli
      </Link>
      <strong>||</strong>
      <Link to="/deleteshows" className="adminItem">
        Cancella Spettacoli
      </Link>
    </div>
  );
};
export default AdminHome;
