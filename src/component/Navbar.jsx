import '../styles/navbar.css'
import Home from './Home'
const Navbar = () => {
    const items = ["Tutti i film", "Offerte e Promozioni", "Dove siamo"]
    return(
        <header className="container text-center d-flex">
            <Home />
            {items.map((i) => {
                return <div className='navbar__item' key={i}>{i}</div>
            })}
        </header>
    )
}
export default Navbar