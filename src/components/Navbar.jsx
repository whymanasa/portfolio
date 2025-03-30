import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <div className="left">
      <Link to="/">Why_m</Link>
      </div>
      <div className="right">
        <Link to="about-me">About me</Link>
        <Link to="project">Projects</Link>
        <Link to="contact">Contact</Link>
      </div>
        
      
    </div>
  )
}

export default Navbar
