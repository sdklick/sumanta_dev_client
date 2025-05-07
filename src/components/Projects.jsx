import React from "react";
import projectData from "./Data/projectData";
import ProjectModal from "./ProjectModal";
const Projects = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center gap-5">
          {projectData.map((val, idx) => {
            return (
              <div
                key={idx}
                className="col-12 col-sm-5 col-md-5 col-lg-3 border border-info-subtle rounded"
                style={{
                  boxShadow:
                    "rgb(0 132 211 / 25%) 0px 54px 55px, rgb(17 187 209 / 58%) 0px -12px 30px, rgb(64 192 176 / 0%) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  padding: "0px",
                }}
              >
                <div className="card " style={{ backgroundColor: "black" }}>
                  <img
                    src={val.projectimg}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-light">
                      {val.projectname}
                    </h5>

                    <div className="d-flex justify-content-between">
                    <ProjectModal
                        projectlink={val.projectlink}
                        projectname={val.projectname}
                        idx={idx}
                      />
                      
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
