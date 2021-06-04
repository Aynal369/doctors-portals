import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Doctors Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link fw-bold" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link fw-bold" to="/dental-services">
                Dental Services
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link text-white fw-bold" to="/reviews">
                Reviews
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link text-white fw-bold" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link text-white fw-bold" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
