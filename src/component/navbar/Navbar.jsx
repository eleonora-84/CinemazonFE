import { NavLink } from 'react-router-dom';
import Logo from './Logo'
import SkinTop from './SkinTop';
import './navbar.css'

const Navbar = () => {
    
    return(
       <div className='topContainer'>
        <header className="navbarMain container text-center d-flex">
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