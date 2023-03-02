import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AllMovies, { movieLoader } from "./component/movies/AllMovies";
import Home from "./component/home/Home";
import MovieCard from "./component/movies/MovieCard";
import ShowCard from "./component/shows/ShowCard";
import Promo from "./component/promo/Promo";
import AllShows from "./component/shows/AllShows";
import Where from "./component/where/Where";
import Buy from "./component/buy/Buy";
import ThankYouPage from "./component/typ/ThankYouPage";
import NotFound from "./component/not_found/NotFound";
import AddMovies from "./component/admin/AddMovies";
import AddShows from "./component/admin/AddShows";
import AdminHome from "./component/admin/AdminHome";
import About from "./component/about/About";
import DeleteShows from "./component/admin/DeleteShows";
import DeleteMovies from "./component/admin/DeleteMovies";
import Hello from "./component/home/Hello";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Hello />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
        loader: movieLoader,
      },
      {
        path: "/shows",
        element: <AllShows />,
      },
      {
        path: "/promo",
        element: <Promo />,
      },
      {
        path: "/where",
        element: <Where />,
      },
      {
        path: "/moviecard",
        element: <MovieCard />,
        loader: movieLoader,

      },
      {
        path: "/showcard",
        element: <ShowCard />,
      },
      { path: "/buy", element: <Buy /> },
      {
        path: "/typ",
        element: <ThankYouPage />,
      },
      {
        path: "/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/addmovies",
        element: <AddMovies />,
      },
      {
        path: "/addshows",
        element: <AddShows />,
      },
      {
        path: "/deleteshows",
        element: <DeleteShows />,
      },
      {
        path: "/deletemovies",
        element: <DeleteMovies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
