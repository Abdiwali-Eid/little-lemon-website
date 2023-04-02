import React from 'react'
import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import Reservition from '../pages/ReservationsPage'
import Home from '../pages/Home'
import Logo from '../assets/Logo .svg';


import About from '../pages/About'


const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt="" />
     <nav className='uls'>
    <Link to="/" className="nav-item" >Home</Link>
     <Link to="/about" className="nav-item li">About</Link>
     <Link to="/booking" className="nav-item li">Reservition</Link>
     <Link to="/contact" className="nav-item li">Menu</Link>
     <Link to="/contact" className="nav-item li">Order Online</Link>
     <Link to="/contact" className="nav-item li">Login</Link>
   </nav>
    

    </div>
  //  
  )
}

export default Header