import React from 'react'
import '../styles/Home.css'
import image from '../assets/flowers.jpg'

function Home() {
  return (
    <div className='home-container'>
      <div className="intro">hello there i am manasa</div>
      <div className="picture">
        <img src={image} alt='Flowers'/>
      </div>
    </div>
  )
}

export default Home
