import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/footer.css"; // Ensure this is imported

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-copywright">Designed and Developed by Manasa Yenimireddy</p>
        <p className="footer-copywright">Copyright © {year} SB</p>
        <ul className="footer-icons">
          <li className="social-icons">
            <a href="https://github.com/whymanasa" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </li>
          
          <li className="social-icons">
            <a href="http://www.linkedin.com/in/y-manasa-y-b32a37336" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
