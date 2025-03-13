import React from "react";
import "../styles/skills.css";

const Skills = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div
              id="list-example"
              className="list-group overflow-scroll"
              style={{ maxHeight: "575px" }}
            >
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-1"
              >
                <i
                  className="fa fa-html5"
                  style={{ fontSize: "50px", color: "red" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-2"
              >
                <i
                  className="fab fa-css3"
                  style={{ fontSize: "50px", color: "#2965f1" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-3"
              >
                <i
                  className="fab fa-js-square"
                  style={{ fontSize: "50px", color: "#F0DB4F" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-4"
              >
                <i
                  className="fab fa-bootstrap"
                  style={{ fontSize: "50px", color: "#6f42c1" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-5"
              >
                <i
                  className="fab fa-react"
                  style={{ fontSize: "50px", color: "#61DBFB" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-6"
              >
                <i
                  className="fab fa-node"
                  style={{ fontSize: "50px", color: "#3C873A" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-7"
              >
                <i
                  className="fas fa-database"
                  style={{ fontSize: "50px", color: "#4DB33D" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-8"
              >
                <i
                  className="fab fa-python"
                  style={{ fontSize: "50px", color: "#306998" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-9"
              >
                <i
                  className="fab fa-git-square"
                  style={{ fontSize: "50px", color: "#F1502F" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-10"
              >
                <i
                  className="fab fa-docker"
                  style={{ fontSize: "50px", color: "#0db7ed" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-11"
              >
                <i
                  className="fab fa-aws"
                  style={{ fontSize: "50px", color: "#252F3E" }}
                ></i>
              </a>
              <a
                className="list-group-item list-group-item-action text-center"
                href="#list-item-12"
              >
                <i
                  className="fab fa-linux"
                  style={{ fontSize: "50px", color: "#333333" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-8 ">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabIndex="0"
            >
              <h4 className="text-light" id="list-item-1">
                HTML5
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "100%" }}
                >
                  100%
                </div>
              </div>
              <p className="mt-2 text-light">
                HyperText Markup Language (HTML) is a programming language that
                defines the structure and meaning of web content. It's a
                fundamental building block of the web, and is used to instruct
                browsers on how to display text, images, and other content on a
                web page.
              </p>
              <h6 className="mt-2 text-light">Development</h6>
              <p className="mt-2 text-light">
                In 1980, physicist Tim Berners-Lee, a contractor at CERN,
                proposed and prototyped ENQUIRE, a system for CERN researchers
                to use and share documents. In 1989, Berners-Lee wrote a memo
                proposing an Internet-based hypertext system.[3] Berners-Lee
                specified HTML and wrote the browser and server software in late
                1990. That year, Berners-Lee and CERN data systems engineer
                Robert Cailliau collaborated on a joint request for funding, but
                the project was not formally adopted by CERN. In his personal
                notes of 1990, Berners-Lee listed "some of the many areas in
                which hypertext is used"; an encyclopedia is the first entry.
              </p>
              <h6 className="mt-2 text-light">Structure</h6>
              <p className="mt-2 text-light">
                HTML uses markup to annotate content, such as text, images, and
                other elements. These elements are enclosed by tags, which are
                written using angle brackets. For example, the and tags surround
                and provide information about document text.
              </p>
              <h6 className="mt-2 text-light">Appearance</h6>
              <p className="mt-2 text-light">
                HTML is primarily used to structure content, not to define its
                appearance. Cascading Style Sheets (CSS) is often used to
                describe a web page's appearance
              </p>
              <h4 className="text-light" id="list-item-2">
                CSS3
              </h4>

              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-primary text-light"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>

              <p className="mt-2 text-light">
                Cascading Style Sheets (CSS) is a style sheet language used for
                specifying the presentation and styling of a document written in
                a markup language such as HTML or XML (including XML dialects
                such as SVG, MathML or XHTML).CSS is a cornerstone technology of
                the World Wide Web, alongside HTML and JavaScript.
              </p>

              <h6 className="mt-2 text-light">How it works</h6>
              <p className="mt-2 text-light">
                CSS describes how elements should be rendered on screen, on
                paper, in speech, or on other media. It can be used to change
                the font, size, or decorative flourishes like animations or
                images.
              </p>
              <h6 className="mt-2 text-light">How it's used</h6>
              <p className="mt-2 text-light">
                CSS is used to separate content and presentation. This can
                improve content accessibility, provide more flexibility, and
                enable multiple web pages to share formatting
              </p>
              <h6 className="mt-2 text-light">How it's standardized</h6>
              <p className="mt-2 text-light">
                The World Wide Web Consortium (W3C) maintains the CSS
                specifications. CSS is standardized across web browsers
                according to W3C specifications
              </p>
              <h6 className="mt-2 text-light">How it's styled</h6>
              <p className="mt-2 text-light">
                There are different styles of CSS, including internal, external,
                and inline.
              </p>

              <h4 className="text-light" id="list-item-3">
                JAVASCRIPT
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-warning text-dark"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>

              <p className="mt-2 text-light">
                JavaScript (JS) is a programming language that adds
                interactivity to web pages. It allows developers to create
                dynamic content, animations, and other features that make web
                pages more responsive to user interactions
              </p>
              <h6 className="mt-2 text-light">What it's used for</h6>
              <p className="mt-2 text-light">
                Developers use JavaScript to create dynamic content, such as
                animations, pop-up menus, and clickable buttons. It can also be
                used to control multimedia.
              </p>
              <h6 className="mt-2 text-light">
                How it works with HTML and CSS
              </h6>
              <p className="mt-2 text-light">
                JavaScript complements CSS in formatting HTML elements, while
                also providing user interaction.
              </p>
              <h6 className="mt-2 text-light">Asynchronous programming</h6>
              <p className="mt-2 text-light">
                JavaScript has two main types of scope: Global Scope and Local
                Scope. Variables defined outside any function have a global
                scope, while variables declared within a function are local to
                that function.
              </p>
              <h6 className="mt-2 text-light">Benefits</h6>
              <p className="mt-2 text-light">
                JavaScript is known for its versatility, flexibility, and ease
                of use.
              </p>
              <h4 className="text-light" id="list-item-4">
                BOOTSTRAP
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "90%", backgroundColor: "#6f42c1" }}
                >
                  90%
                </div>
              </div>

              <p className="mt-2 text-light">
                Bootstrap is a free, open-source framework for web development
                that helps create responsive websites and web applications. It
                offers a collection of pre-designed components, styles, and
                interactions for user interfaces, such as buttons, forms,
                navigation bars, and modals.
              </p>
              <h6 className="mt-2 text-light">History</h6>
              <p className="mt-2 text-light">
                Bootstrap, originally named Twitter Blueprint, was developed by
                Mark Otto and Jacob Thornton at Twitter as a framework to
                encourage consistency across internal tools. Before Bootstrap,
                various libraries were used for interface development, which led
                to inconsistencies and a high maintenance burden.
              </p>
              <h6 className="mt-2 text-light">Features</h6>
              <p className="mt-2 text-light">
                The primary factor is whether the developers in charge find
                those choices to their liking. Once added to a project,
                Bootstrap provides basic style definitions for all HTML
                elements. The result is a uniform appearance for prose, tables
                and form elements across web browsers. In addition, developers
                can take advantage of CSS classes defined in Bootstrap to
                further customize the appearance of their contents. For example,
                Bootstrap has provisioned for light- and dark-colored tables,
                page headings, more prominent pull quotes, and text with a
                highlight.
              </p>
              <h4 className="text-light" id="list-item-5">
                REACT.JS
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-dark"
                  style={{ width: "80%", backgroundColor: "#61DBFB" }}
                >
                  80%
                </div>
              </div>

              <p className="mt-2 text-light">
                React.js is a free, open-source JavaScript framework that's used
                to build user interfaces (UIs) for web and mobile applications
                React.js is a component-based architecture that encourages
                developers to break down complex UIs into reusable components.
                These components are like Lego blocks that can be assembled to
                form the application's user interface
              </p>
              <h4 className="text-light" id="list-item-6">
                NODE.JS
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "60%", backgroundColor: "#3C873A" }}
                >
                  60%
                </div>
              </div>

              <p className="mt-2 text-light">
                Node.js is an open-source JavaScript runtime environment that
                allows developers to run JavaScript code on the server side,
                outside of a web browser. It's used to create web applications,
                and is well-suited for data-intensive and real-time applications
              </p>
              <h4 className="text-light" id="list-item-7">
                MONGO DB
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "80%", backgroundColor: "#4DB33D" }}
                >
                  80%
                </div>
              </div>

              <p className="mt-2 text-light">
                MongoDB is a document database that stores data in flexible,
                JSON-like documents. It is designed to be scalable, flexible,
                and high-availability, and is used by over 47,000 customers
                across 118 regions.
              </p>
              <h4 className="text-light" id="list-item-8">
                PYTHON
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "70%", backgroundColor: "#306998" }}
                >
                  70%
                </div>
              </div>

              <p className="mt-2 text-light">
                Python is a popular programming language because it's
                beginner-friendly and versatile. It's also open-source and has a
                large community that contributes to its development. Python code
                can run on multiple platforms, including Windows, macOS, and
                Linux, without any modifications
              </p>
              <h4 className="text-light" id="list-item-9">
                GIT
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "80%", backgroundColor: "#F1502F" }}
                >
                  80%
                </div>
              </div>

              <p className="mt-2 text-light">
                Git is a free, open-source version control system (VCS) that
                tracks changes in computer files and coordinates work on those
                files among multiple people
              </p>
              <h4 className="text-light" id="list-item-10">
                DOCKER
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "20%", backgroundColor: "#0db7ed" }}
                >
                  20%
                </div>
              </div>

              <p className="mt-2 text-light">
                Docker is an open-source platform that helps developers build,
                test, and deploy applications quickly which are standardized
                units that contain everything needed to run the software. This
                includes the code, libraries, system tools, and runtime.
              </p>
              <h4 className="text-light" id="list-item-11">
                AWS
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "20%", backgroundColor: "#252F3E" }}
                >
                  20%
                </div>
              </div>

              <p className="mt-2 text-light">
                Amazon Web Services (AWS) is a cloud computing platform that
                offers a variety of services to help businesses and individuals
                run and grow more efficiently.
              </p>
              <h4 className="text-light" id="list-item-12">
                LINUX
              </h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-light"
                  style={{ width: "20%", backgroundColor: "#333333" }}
                >
                  20%
                </div>
              </div>

              <p className="mt-2 text-light">
                Linux is a versatile, open-source operating system (OS) that's
                used worldwide Linux is a program that manages applications and
                a computer's basic functions, such as hardware resources and
                software. It's an alternative to proprietary operating systems
                like Microsoft Windows and macOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
