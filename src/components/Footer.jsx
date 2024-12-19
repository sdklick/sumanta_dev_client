import React from "react";
import "../styles/footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer2">
          <div className="copyright">
            <p style={{ width: "85%", textAlign: "center" }}>
              &copy; 2024 All Right Reserved | Developed By Sumanta Das
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 my-3">
        
            <a
              href="https://github.com/sdklick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumantad827/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={32} color="#008ad8" />
            </a>
            <a
              href="mailto:sumantad827@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail size={32} color="red" />
            </a>

            <a
              href="mailto:sumantad827@outlook.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiMicrosoftOutlookLogo size={32} color="#008ad8" />
            </a>
            <a
              href="https://wa.me/8637073059?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={32} color="green" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
