import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import AllMovies from "./component/AllMovies";
import Home from "./component/Home";
import MovieCard from "./component/MovieCard";
import Navbar from "./component/Navbar"
import Promo from "./component/Promo";
import AllShows from "./component/AllShows";
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
      <Route path="/shows" element={<AllShows/>} />
      <Route path="/promo" element={<Promo/>} />
      <Route path="/where" element={<Where/>} />
      <Route path="/moviecard" element={<MovieCard/>} />
    </Routes>
    </>
    
  )
}

export default App
