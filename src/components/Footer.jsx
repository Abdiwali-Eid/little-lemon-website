import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo .svg'

import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="logos">
        <img src={Logo} alt="" sizes='600px' />
      </div>
      <div className="menuss" style={{paddingTop:'15px'}}>
      <h1 className="footer-header">Navigation</h1>
      <Link style={{textDecoration:'none'}} className='liss' to="/">Home</Link>
      <Link  style={{textDecoration:'none'}} className='liss' to="/about">About</Link>
      <Link  style={{textDecoration:'none'}} className='liss' to="/booking">Reservation</Link>
      <Link  style={{textDecoration:'none'}} className='liss' to="/about">Menu</Link>
      <Link  style={{textDecoration:'none'}} className='liss' to="/about">Order Online</Link>
      
      </div>
      <div className="contact" style={{paddingTop:'15px'}}>
        <h1>Contact</h1>
        <p>Muqdisho jidka 30-ka</p><br />
        <p>+252 61 9779420</p><br />
        <p>littleLemon@gmail.com</p>
      </div>
      <div className="icons" style={{paddingTop:'15px'}}>
        <h1>Connect</h1>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
      </div>
    </div>
  )
}

export default Footer
