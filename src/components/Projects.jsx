import React from "react";
import projectData from "./Data/projectData";
const Projects = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center gap-5">
          {projectData.map((val, idx) => {
            return (
              <div key={idx} className="col-12 col-sm-5 col-md-5 col-lg-3">
                <div className="card">
                  <img
                    src={val.projectimg}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {val.projectname}
                    </h5>

                    <div className="d-flex justify-content-between">
                      <a
                        href={val.projectlink}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                      <a
                        href={val.projectcode}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
