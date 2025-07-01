"use client"

import { useState } from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <Link to="/">Why_m</Link>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className={`right ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="about-me" onClick={closeMenu}>
            About me
          </Link>
          <Link to="project" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>

      <div className={`mobile-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>
    </>
  )
}

export default Navbar

