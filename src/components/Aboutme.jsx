import React from "react";
import "../styles/aboutme.css";

const Aboutme = () => {
  return (
    <>
      <section id="about-me">
        <div class="team-title mt-3">
          <h1>About Me</h1>
          <hr
            class="ahr"
            style={{
              width: "20%",
              backgroundColor: "red",
              height: "15px",
              borderColor: "gold",
              borderRadius: "5px",
            }}
          />
        </div>
        <div class="container-fluid  px-5 bg-light banner-background d-grid">
          <div class="row">
            <div class="col-md-6 col-12 column">
              <h4 class="mb-2">
                <i class="fas fa-laptop-code"></i>&nbsp;&nbsp;An Engineer With
                Passion
              </h4>
              <hr />
              <p>
                Hey there!👋 I'm a <b>Full Stack Developer</b>🧑🏻&zwj;💻 at{" "}
                <b>
                  <i>Tata Consultancy Services</i>
                </b>
                , where I proficiently leverage a diverse set of tools in the
                <b style={{ color: "#5f6368" }}>React</b> ecosystem, including
                <b style={{ color: "#5f6368" }}>
                  HTML, CSS, JavaScript (ES6+), TypeScript, React-router, Redux,
                  Storybook, and testing libraries
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
                  Express.js and Nest.js, alongside MongoDB
                </b>
                , to create RESTful APIs. My expertise in these technologies,
                honed through personal projects, enables me to build complex and
                scalable solutions efficiently.
                <br />
                <br />
                My proficiency extends beyond JavaScript to encompass{" "}
                <b style={{ color: "#5f6368" }}>Java and Python</b>, enhancing
                my versatility in software development. Driven by curiosity and
                a commitment to innovation, I'm dedicated to learning and
                staying updated with the latest technologies. I eagerly seek
                opportunities to contribute to impactful projects and
                collaborate with like-minded professionals pushing the
                boundaries of innovation.
                <br />
                <br />
                Outside of work, I enjoy reading books, and watching cricket
                &amp; football.
              </p>
            </div>

            <div class="col-md-6 col-12 mt-5">
              <h4 class="mb-2 text-center">
                <i class="fas fa-laptop-code"></i>&nbsp;&nbsp;Education
              </h4>

              <hr />
              <h6 class="fw-bold text-center">
                Maulana Abul Kalam Azad University of Technology
              </h6>
              <p className="text-center">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-center">Jul 2022 - Jun 2024</p>
              <hr />
              <h6 class="fw-bold text-center">
                Maulana Abul Kalam Azad University of Technology
              </h6>
              <p className="text-center">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-center">Jul 2019 - Jun 2022</p>
              <hr />

              <div className="text-center">
                <a href="#" class="btn btn-success border rounded-pill">
                  About Me
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="#" class="btn btn-success border rounded-pill">
                  About Me
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
