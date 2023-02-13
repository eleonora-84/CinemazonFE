import '../styles/navbar.css'
import Home from './Logo'
const Navbar = () => {
    const items = ["Tutti i film", "Offerte e Promozioni", "Dove siamo"]
    return(
        <header className="container text-center d-flex navbar__main">
            <Home />
            {items.map((i) => {
                return <div className='navbar__item' key={i}>{i}</div>
            })}
        </header>
    )
}
export default Navbar