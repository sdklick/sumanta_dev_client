import React from "react";
import "../styles/navbar.css";

const Home = () => {
  return (
    <>
      <div class="container-fluid  px-5 pt-5 bg-light banner-background d-grid">
        <div class="row">
          <div class="col-md-6 col-12 column">
            <h1 class="mb-2">Hello, I'm</h1>
            <h2 class="display-4 fw-bold">Sumanta Das</h2>
            <hr />
            <h3 style={{ color: "orangered" }}>MERN Developer</h3>
            <hr />
            <h3 style={{ color: "orangered" }}>Cloud Enthusiast</h3>
            <hr />
            <h3 style={{ color: "orangered" }}>Ai ML Enthusiast</h3>
            <p class="mt-3">
              I'm a software engineer based in Kolkata. I'm committed to
              continually growing and innovating within the ever-evolving field
              of software development.
            </p>
            <a href="#" class="btn btn-success border rounded-pill">
              About Me
            </a>
          </div>

          <div class="col-md-6 col-12 profile-photo"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
