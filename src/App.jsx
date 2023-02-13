import "bootstrap/dist/css/bootstrap.min.css";
import AllMovies from "./component/AllMovies";
import Home from "./component/Home";
import Mycarousel from "./component/Mycarousel";

import Navbar from "./component/Navbar"
import Selector from "./component/Selector";
import SkinTop from "./component/SkinTop"

function App() {
  

  return (
    <>
    <SkinTop />
    <Navbar />
    <Home />
    <AllMovies />
    
    </>
    
  )
}

export default App
