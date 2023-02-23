import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerMain">
      <Link to="/about" className="footerItem">
        About
      </Link>
      <Link to="/adminhome" className="footerItem">
        Admin
      </Link>
    </footer>
  );
};

export default Footer;
