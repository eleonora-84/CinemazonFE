import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import AllMovies from "./component/movies/AllMovies";
import Home from "./component/home/Home";
import MovieCard from "./component/movies/MovieCard";
import ShowCard from "./component/shows/ShowCard";
import Navbar from "./component/navbar/Navbar";
import Promo from "./component/promo/Promo";
import AllShows from "./component/shows/AllShows";
import Where from "./component/where/Where";
import Buy from "./component/buy/Buy";
import ThankYouPage from "./component/typ/ThankYouPage";
import NotFound from "./component/not_found/NotFound";
import AddMovies from "./component/admin/AddMovies";
import AddShows from "./component/admin/AddShows";
import Footer from "./component/footer/Footer";
import AdminHome from "./component/admin/AdminHome";
import About from "./component/about/About";

import "./app.css";
import DeleteShows from "./component/admin/DeleteShows";
import DeleteMovies from "./component/admin/DeleteMovies";

function App() {
  return (
    <>
      <div className="routesContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/shows" element={<AllShows />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/where" element={<Where />} />
          <Route path="/moviecard" element={<MovieCard />} />
          <Route path="/showcard" element={<ShowCard />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/typ" element={<ThankYouPage />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addmovies" element={<AddMovies />} />
          <Route path="/addshows" element={<AddShows />} />
          <Route path="/deleteshows" element={<DeleteShows />} />
          <Route path="/deletemovies" element={<DeleteMovies />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
