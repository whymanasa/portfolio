import React from 'react'


import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>

        <div className="contact-info-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <a href="123yapitsme@gmail.com" className="contact-link">
                  123yapitsme@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaGithub className="info-icon" />
              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/whymanasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/whymanasa
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/y-manasa-y-b32a37336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/y-manasa-y-b32a37336/
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>City, Country</p>
              </div>
            </div>

            <div className="resume-download">
              <h3>My Resume</h3>
              <a href="/manasa_resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

