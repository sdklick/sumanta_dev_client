import React, { useEffect, useState } from "react";
import "../styles/footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [yearData, setYearData] = useState("");
  useEffect(() => {
    const thisyear = new Date();
    setYearData(thisyear.getFullYear());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row d-flex flex-lg-row flex-md-column flex-sm-column flex-column column-gap-3">
          <div className="col text-light text-center d-flex my-3 justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center overflow-auto">
            &copy; {yearData} All Right Reserved | Developed By Sumanta Das
          </div>
          <div className="col d-flex gap-5 justify-content-lg-end  justify-content-md-center justify-content-sm-center justify-content-center my-3 overflow-auto">
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
      </div>
      {/* <footer>
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
       
      </footer> */}
    </>
  );
};

export default Footer;
