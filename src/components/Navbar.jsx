import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="about-me">About me</Link>
        <Link to="skills">Skills</Link>
      </div>
    </div>
  )
}

export default Navbar
