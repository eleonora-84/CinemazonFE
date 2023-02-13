import "bootstrap/dist/css/bootstrap.min.css";
import AllMovies from "./component/AllMovies";
import Mycarousel from "./component/Mycarousel";

import Navbar from "./component/Navbar"
import Selector from "./component/Selector";
import SkinTop from "./component/SkinTop"

function App() {
  

  return (
    <>
    <SkinTop />
    <Navbar />
    <AllMovies />
    
    </>
    
  )
}

export default App
