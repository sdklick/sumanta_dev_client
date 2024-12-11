import React from "react";
import "../styles/navbar.css";
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
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
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

      <div class="container-fluid  px-5 pt-5 bg-light banner-background d-grid">
        <div class="row">
          <div class="col-md-6 col-12 column">
            <h1 class="mb-2">Hello, I'm</h1>
            <h2 class="display-4 fw-bold">Sumanta Das</h2>
            <h3 class="text-success">MERN Developer</h3>
            <p class="mt-3">
              I'm a software engineer based in Kolkata. I'm committed to
              continually growing and innovating within the ever-evolving field
              of software development.
            </p>
            <a href="#" class="btn btn-success">
              About Me
            </a>
          </div>

          <div class="col-md-6 col-12 profile-photo"></div>
        </div>
      </div>

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
