import React from "react";
import banner from "../assets/ch.jpg";
import codsoft from "../assets/codsoft.jpg";
import ardent from "../assets/ardent.jpg";
import nptel from "../assets/nptel.jpg";
import udemy from "../assets/udemy.jpg";

const Intern = () => {
  return (
    <>
      <section id="about-me">
        <div className="team-title">
          <h1>Internship(certification)</h1>
          <hr
            className="ahr"
            style={{
              width: "20%",
              backgroundColor: "red",
              height: "15px",
              borderColor: "gold",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="container-fluid  px-5 bg-light banner-background d-grid">
          <div className="row">
            <div className="col-md-6 col-12 column">
              <h4 className="mb-2">
                <i className="fas fa-user-graduate"></i>&nbsp;&nbsp;Internship
              </h4>
              <hr />

              <div className="card">
                <img src={ardent} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-bold text-center">
                    Ardent Computech Pvt. Ltd.
                  </h6>
                  <p className="card-text text-center">MERN Stack Trainer</p>
                  <p className="text-center">Jul 2024 - Aug 2024</p>
                  <h6 className="fw-bold text-center">
                    <a
                      href="https://drive.google.com/file/d/1D9_3Wq59ET0euxqVoDAFDJJlzzlubjPe/view"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="fab fa-google-drive" style={{ fontSize: 20 }}>
                        &nbsp;Check
                      </i>
                    </a>
                  </h6>
                </div>
              </div>
              <hr />
              <div className="card">
                <img src={codsoft} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">Codsoft</h5>
                  <p className="card-text text-center">Web Developer Intern</p>
                  <p className="text-center">May 2024 - June 2024</p>
                  <h6 className="fw-bold text-center">
                    <a
                      href="https://drive.google.com/file/d/1D9_3Wq59ET0euxqVoDAFDJJlzzlubjPe/view"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="fab fa-google-drive" style={{ fontSize: 20 }}>
                        &nbsp;Check
                      </i>
                    </a>
                  </h6>
                </div>
              </div>

              
              <hr />
            </div>

            <div className="col-md-6 col-12">
              <h4 className="mb-2 text-center">
                <i className="fas fa-award"></i>&nbsp;&nbsp;Certification
              </h4>

              <hr />
              <div className="card">
                <img src={nptel} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-bold text-center">
                    NPTEL
                  </h6>
                  <p className="card-text text-center">IIOT 4.0</p>
                  <p className="text-center">Jan 2024 - Apr 2024</p>
                  <h6 className="fw-bold text-center">
                    <a
                      href="https://drive.google.com/file/d/1D9_3Wq59ET0euxqVoDAFDJJlzzlubjPe/view"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="fab fa-google-drive" style={{ fontSize: 20 }}>
                        &nbsp;Check
                      </i>
                    </a>
                  </h6>
                </div>
              </div>
              <hr />
              <div className="card">
                <img src={udemy} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title fw-bold text-center">
                    Udemy
                  </h6>
                  <p className="card-text text-center">Web Developer 2.0</p>
                  <p className="text-center">Nov 2021</p>
                  <h6 className="fw-bold text-center">
                    <a
                      href="https://drive.google.com/file/d/1D9_3Wq59ET0euxqVoDAFDJJlzzlubjPe/view"
                      target="_blank"
                      className="btn btn-outline-primary"
                    >
                      <i className="fab fa-google-drive" style={{ fontSize: 20 }}>
                        &nbsp;Check
                      </i>
                    </a>
                  </h6>
                </div>
              </div>
              <hr />

              <h4 className="my-4">
                <i className="fa fa-youtube"></i>&nbsp;&nbsp;Extracurricular
                activities
              </h4>

              <hr />
              <div className="card">
                <img src={banner} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="fw-bold text-center">
                    <a
                      href="https://www.youtube.com/@codebengali925/videos"
                      target="_blank"
                      className="btn btn-outline-danger"
                    >
                      <i className="fa fa-youtube" style={{ fontSize: 20 }}>
                        &nbsp;Youtube
                      </i>
                    </a>
                  </h6>
                  <p className="text-center card-text">Tech content creator</p>
                  <p className="text-center">2021 - Now</p>
                </div>
              </div>
              <hr />
              {/* <div className="text-center">
                <a
                  href="#"
                  className="btn border rounded-pill"
                  style={{ backgroundColor: "orangered", color: "white" }}
                >
                  Contactme
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" className="btn btn-success border rounded-pill">
                  DownloadCV
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intern;
