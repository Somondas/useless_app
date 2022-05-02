import react from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <details>
      <summary></summary>
      <nav class="menu">
        <Link  to="/">Contactus</Link>
        <Link  to="/about">About us</Link>
        <a href="#link">Work</a>
        <a href="#link">Links</a>
        <a href="#link">Contact</a>
        <a href="#link">About</a>
      </nav>
    </details>
  );
};
export default Navbar;
