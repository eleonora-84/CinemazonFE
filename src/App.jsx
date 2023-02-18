import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";


import AllMovies from "./component/movies/AllMovies";
import Home from "./component/Home";
import MovieCard from "./component/movies/MovieCard";
import ShowCard from "./component/shows/ShowCard";
import Navbar from "./component/navbar/Navbar"
import Promo from "./component/promo/Promo";
import AllShows from "./component/shows/AllShows";
import SkinTop from "./component/navbar/SkinTop"
import Where from "./component/where/Where";
import Buy from "./component/shows/Buy";
import ThankYouPage from "./component/typ/ThankYouPage";
import NotFound from "./component/not_found/NotFound";

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
      <Route path="/showcard" element={<ShowCard/>} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/typ" element={<ThankYouPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
    
  )
}

export default App
