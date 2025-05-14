import React from "react";
import "./navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">M</div>
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/latest">Latest</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
