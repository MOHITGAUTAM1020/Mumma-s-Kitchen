import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
      <div className="navbar">
        <div className="logo">
          <img className="logo" src="/assets/logo1000.png" alt="khali hai" />
        </div>
        <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Sign up</Link>
        </div>
      </div>
      </nav>
    </>
  );
}
export default Navbar;
