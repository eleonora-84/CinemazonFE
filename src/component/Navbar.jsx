import '../styles/navbar.css'
import Home from './Home'
const Navbar = () => {
    const items = ["Tutti i film", "Offerte e Promozioni", "Dove siamo"]
    return(
        <header className="navbar">
            <Home />
            {items.map((i) => {
                return <div className='navbarItem'>{i}</div>
            })}
        </header>
    )
}
export default Navbar