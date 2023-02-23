import { Link } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div className="adminHome">
            <Link to="/addmovies" className='adminItem'>Aggiungi Film
            </Link>
            <span>||</span>
            <Link to="/addshows" className='adminItem'>Aggiungi Spettacoli
            </Link>
        </div>
    )
}
export default AdminHome