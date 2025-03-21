import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import sumantacv from "../assets/sumantacv.pdf";
import { FaCode } from "react-icons/fa";
import Battery from "./Battery";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <FaCode size={25} color="#ff6300" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutme" className="nav-link">
                  Aboutme
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className="nav-link">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/internship" className="nav-link">
                  Internship(certification)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-custom"
                  href={sumantacv}
                  download="sumanta_cv.pdf"
                >
                  Download CV
                </a>
              </li>
              &nbsp; &nbsp; &nbsp;
            </ul>
          </div>
          <Battery />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
