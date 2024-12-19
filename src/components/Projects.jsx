import React from "react";
import cvapp from "../assets/cvapp.png";
import sumantadev from "../assets/sumantadev.png";
import examapp from "../assets/Examapp.png";

const Projects = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center gap-5">
          <div className="col-12 col-sm-5 col-md-5 col-lg-3">
            <div className="card">
              <img src={sumantadev} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">My PortFolio</h5>

                <div className="d-flex justify-content-between">
                  <a
                    href="https://sumantadev.netlify.app/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/sdklick/sumanta_dev_client"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-5 col-md-5 col-lg-3">
            <div className="card">
              <img src={examapp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Online Examination</h5>

                <div className="d-flex justify-content-between">
                  <a
                    href="https://sumanta-learn-app.netlify.app/exampage"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/sdklick/Exam_client"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-10 col-lg-3">
            <div className="card">
              <img src={cvapp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Cv Builder</h5>

                <div className="d-flex justify-content-between">
                  <a
                    href="https://sumanta-cv-app.netlify.app/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                  <a
                    href="https://github.com/sdklick/CV_client"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
