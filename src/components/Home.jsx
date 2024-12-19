import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid  px-5 pt-5 bg-light banner-background d-grid">
        <div className="row">
          <div className="col-md-6 col-12 column">
            <h1 className="mb-2">Hello, I'm</h1>
            <h2 className="display-4 fw-bold">Sumanta Das</h2>
            <hr />
            <h3 style={{ color: "orangered" }}>MERN Developer</h3>
            <hr />
            <h3 style={{ color: "orangered" }}>Cloud Enthusiast</h3>
            <hr />
            <h3 style={{ color: "orangered" }}>Ai ML Enthusiast</h3>
            <p className="mt-3">
              I'm a software engineer based in Kolkata. I'm committed to
              continually growing and innovating within the ever-evolving field
              of software development.
            </p>
            <button className="btn btn-success border rounded-pill">
              <NavLink to="/aboutme" className="nav-link">
                Aboutme
              </NavLink>
            </button>
          </div>

          <div className="col-md-6 col-12 profile-photo"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
