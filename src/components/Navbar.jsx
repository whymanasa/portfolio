import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
        <Link to="/">Home</Link>
        <Link to="about-me">About me</Link>
        <div className="logo">PORTFOLIO</div>
        <Link to="education">Education</Link>
        <Link to="project">Projects</Link>
      
    </div>
  )
}

export default Navbar
