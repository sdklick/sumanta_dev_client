import React from "react";
import "../styles/aboutme.css";
import sumantacv from "../assets/sumantacv.pdf";
import { FcEngineering, FcGraduationCap } from "react-icons/fc";

const Aboutme = () => {
  return (
    <>
      <section id="about-me">
        <div className="team-title">
          <h1>About Me</h1>
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
                <FcEngineering size={35} />
                &nbsp;&nbsp;An Engineer With Passion
              </h4>
              <hr />
              <p>
                Hey there!👋 I'm a <b>Full Stack Developer</b>, where I
                proficiently leverage a diverse set of tools in the
                <b style={{ color: "#5f6368" }}>React</b> ecosystem, including
                <b style={{ color: "#5f6368" }}>
                  HTML, CSS, JavaScript (ES6+), React-router, Redux, Python, Git
                </b>
                . My primary focus is on crafting intuitive user interfaces and
                enhancing user experiences through seamless design
                implementation.
                <br />
                <br />
                Beyond front-end development, I adeptly employ
                <b style={{ color: "#5f6368" }}>Node.js</b>, utilizing
                frameworks like{" "}
                <b style={{ color: "#5f6368" }}>
                  Express.js and, alongside MongoDB
                </b>
                , to create RESTful APIs. My expertise in these technologies,
                honed through personal projects, enables me to build complex and
                scalable solutions efficiently.
                <br />
                <br />
                My proficiency extends beyond JavaScript to encompass{" "}
                <b style={{ color: "#5f6368" }}>Python</b>, enhancing my
                versatility in software development. Driven by curiosity and a
                commitment to innovation, I'm dedicated to learning and staying
                updated with the latest technologies. I eagerly seek
                opportunities to contribute to impactful projects and
                collaborate with like-minded professionals pushing the
                boundaries of innovation.
                <br />
                <br />
                Outside of work, I enjoy reading books, and watching cricket
                &amp; football.
              </p>
            </div>

            <div className="col-md-6 col-12">
              <h4 className="mb-2 text-center">
                <FcGraduationCap size={35} />
                &nbsp;&nbsp;Education
              </h4>

              <hr />
              <h6 className="fw-bold text-center">
                Maulana Abul Kalam Azad University of Technology
              </h6>
              <p className="text-center">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-center">Jul 2022 - Jun 2024</p>
              <hr />
              <h6 className="fw-bold text-center">
                Maulana Abul Kalam Azad University of Technology
              </h6>
              <p className="text-center">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-center">Jul 2019 - Jun 2022</p>
              <hr />

              <div className="text-center">
                <a
                  className="btn btn-custom"
                  href={sumantacv}
                  download="sumanta_cv.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
