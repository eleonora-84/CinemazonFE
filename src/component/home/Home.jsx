import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import "../../index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="outletContainer">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Home;
