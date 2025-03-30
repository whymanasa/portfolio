import React from 'react'
import '../styles/Home.css'
import image from '../assets/flowers.jpg'

function Home() {
  return (
    <div className='home-container'>
      <div className="intro"><p className="h" style={{color:'#ededed '}}>Hello there</p>
      <p className="h" style={{color:'#ededed '}}>I am Manasa Y</p>
      <p style={{color:'#102A33 ',fontSize:'30px'}}>(─ ‿‿ ─)</p></div>
      <div className="picture">
        <img src={image} alt='Flowers'/>
      </div>
    </div>
  )
}

export default Home
