import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import Header from './Header'
import Footer from './Footer'
import './Success.css'
const Success = () => {
  return (
    <div>
      

     <div className="guud">
         <div className="icooons"><BsCheck2Circle size={60} color='green'/></div> 
     <div className="tuuxt">
   <h1 style={{marginLeft:'100px'}}>Booking Confirmed </h1><br />
        <p>We are pleased to inform you that your reservation request has been received and confirmed.</p>
 
     </div>
     </div>
   
    
     
 
    </div>


  )
}

export default Success