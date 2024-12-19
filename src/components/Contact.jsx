import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <section id="about-me">
        <div className="team-title">
          <h1>Contact Me</h1>
          <hr
            className="ahr"
            style={{
              width: "20%",
              backgroundColor: "red",
              height: "10px",
              borderColor: "gold",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="container-fluid  px-5 bg-light banner-background d-grid">
          <div className="row">
            <div className="col-md-6 col-12 column">
              <h4 className="mb-2">
                <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Address
              </h4>
              <hr />
              <p>
                <b>Village : </b>
                <b style={{ color: "#5f6368" }}>Narina</b>
              </p>
              <p>
                <b>Post office : </b>
                <b style={{ color: "#5f6368" }}>Balisai</b>
              </p>
              <p>
                <b>District : </b>
                <b style={{ color: "#5f6368" }}>Purba Medinipur</b>
              </p>
              <p>
                <b>State : </b>
                <b style={{ color: "#5f6368" }}>West Bengal</b>
              </p>
              <p>
                <b>Pincode : </b>
                <b style={{ color: "#5f6368" }}>721423</b>
              </p>
              <div className="card map-card mb-5">
                <iframe
                  height="300px"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=balisai&zoom=12&maptype=roadmap"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <h4 className="mb-2 text-center">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;I want To Hear From
                You
              </h4>

              <hr />

              <section className="contact">
                <div className="contactus">
                  <div className="form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="number" placeholder="Mobile No" />
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Message Here"></input>
                    <button className="form-btn">Send</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
