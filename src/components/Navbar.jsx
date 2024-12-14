import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i
              className="fas fa-code"
              style={{ fontSize: "20px", color: "#ff6300" }}
            ></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/aboutme" className="nav-link">
                  Aboutme
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="btn btn-custom" href="#">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav>
        <section className="navtitle">
          <i
            className="fas fa-code"
            style={{ fontSize: "28px", color: "#ff6300" }}
          >
            &nbsp;&nbsp;SUMANTA.DEV
          </i>
        </section>
        <section className="socialicon">
          <i
            className="fa fa-github"
            style={{ fontSize: "25px", color: " white" }}
          ></i>
          <i
            className="fa fa-linkedin"
            style={{ fontSize: "25px", color: " #0a66c2" }}
          ></i>
          <i
            className="fa fa-instagram"
            style={{ fontSize: "25px", color: " #008ad8" }}
          ></i>
          <i
            className="fa fa-facebook"
            style={{ fontSize: "25px", color: " #1877f2" }}
          ></i>
        </section>
      </nav> */}
    </>
  );
};

export default Navbar;
