import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <section>
        <div className="about-title">
          <div className="title-div">
            <h3>ABOUT ME</h3>
            <hr
              style={{
                backgroundColor: "#bc33ff",
                height: "5px",
                border: "none",
                width: "20%",
              }}
            />

            <p style={{ color: "#c294f2" }}>
              To obtain a challenging and responsible position in a dynamic
              company where I can utilize and grow my knowledge and skills in
              web development, contributing to the success of the company and
              establishing a strong foundation for my future career.To obtain a
              challenging and responsible position in a dynamic company where I
              can utilize and grow my knowledge and skills in web development,
              contributing to the success of the company and establishing a
              strong foundation for my future career.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="about-photo"></div>
          <div className="about-me">
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "orangered" }}
            >
              {" "}
             <span style={{ color: "#c294f2" }}> &nbsp; AGE : 24</span>
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp; Gender : Male
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp; Nationality : Indian
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp; Contact no : 8637073059
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp; Degree: MCA
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp; Email Id : sumantad827@gmail.com
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp;GitHub : sdklick
            </i>
            <i
              class="fa fa-caret-right"
              style={{ fontSize: "28px", color: "red" }}
            >
              {" "}
              &nbsp;Linkedin : sumantad827
            </i>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
