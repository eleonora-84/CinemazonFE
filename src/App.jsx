import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import AllMovies from "./component/AllMovies";
import Home from "./component/Home";
import Navbar from "./component/Navbar"
import SkinTop from "./component/SkinTop"
import Where from "./component/Where";

function App() {
  

  return (
    <>
    <SkinTop />
    <Navbar />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/movies" element={<AllMovies/>} />
      <Route path="/where" element={<Where/>} />
    </Routes>
    </>
    
  )
}

export default App
