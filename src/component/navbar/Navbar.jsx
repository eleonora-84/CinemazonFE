import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css'
import Logo from './Logo'
const Navbar = () => {
    
    return(
        <header className="container text-center d-flex navbar__main">
            <Logo />
            <NavLink className='navbar__item' to="/movies">
                Tutti i film
            </NavLink>
            <NavLink className='navbar__item' to="/shows">
                Tutti gli spettacoli
            </NavLink>
            <NavLink className='navbar__item' to="/promo">
                Offerte e Promozioni
            </NavLink>
            <NavLink className='navbar__item' to="/where">
                Dove siamo
            </NavLink>
        </header>
    )
}
export default Navbar