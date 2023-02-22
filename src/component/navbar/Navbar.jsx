import { NavLink } from 'react-router-dom';
import './navbar.css'
import Logo from './Logo'
import SkinTop from './SkinTop';
const Navbar = () => {
    
    return(
       <div className='topContainer'>
        <header className="container text-center d-flex navbarMain">
            <Logo />
            <NavLink className='navbarItem' to="/movies">
                Tutti i film
            </NavLink>
            <NavLink className='navbarItem' to="/shows">
                Tutti gli spettacoli
            </NavLink>
            <NavLink className='navbarItem' to="/promo">
                Offerte e Promozioni
            </NavLink>
            <NavLink className='navbarItem' to="/where">
                Dove siamo
            </NavLink>
        </header> 
        <SkinTop />
        </div>
    )
}
export default Navbar