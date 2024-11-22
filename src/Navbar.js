import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <header className="header">

      <div className="logo">PMCH</div>
      
      <nav className="nav">

        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/services">Services</Link>

        <Link to="/doctors">Doctors</Link>
        
        <Link to="/contact">Contact</Link>
       
      </nav>


    </header>
  );
};

export default Navbar;
