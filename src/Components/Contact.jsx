import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <div className='route'>
        <Link to="/" style={{textDecoration:"none", color:"white"}}>KALVIUM❤️</Link>
        <div className='ab'>
      <Link to="/about" style={{textDecoration:"none", color:"white"}}>ABOUT</Link>
      <br /> <br />
      <Link to="/contact" style={{textDecoration:"none", color:"white"}}>CONTACT</Link>
      </div>
    </div>
    <h3>Contact</h3>
    </>
  
  )
}

export default Contact
