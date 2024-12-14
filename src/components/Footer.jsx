import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer2">
          <div class="copyright">
            <p style={{ width: "85%", textAlign: "center" }}>
               &copy; 2024 All Right Reserved | Developed By Sumanta
              Das
            </p>
          </div>
          <div class="sociallink">
            <i
              class="fa fa-github"
              style={{ fontSize: "25px", color: "white" }}
            ></i>
            <i
              class="fa fa-twitter"
              style={{ fontSize: "25px", color: "#008ad8" }}
            ></i>
            <i
              class="fa fa-facebook"
              style={{ fontSize: "25px", color: "#1877f2" }}
            ></i>
            <i
              class="fab fa-google-plus-g"
              style={{ fontSize: "25px", color: "orangered" }}
            ></i>
            <i
              class="fa fa-pinterest"
              style={{ fontSize: "25px", color: "red" }}
            ></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
