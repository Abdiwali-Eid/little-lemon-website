import React from 'react'
import Logo from '../assets/Logo .svg'
import Salad from '../assets/green salad.jfif'
import Lemmon from '../assets/lemmon desert.jfif'
import Brusta from '../assets/brustecha.jpg'
import Avater from '../assets/avater.jfif'
import dhex from '../assets/dhex.PNG'
import { NavLink } from 'react-router-dom';
import Header from './Header'
import { Link,Routes,Route } from 'react-router-dom';
const section = () => {
  return (
    <div className='allss'>
        
    <section className='main' style={{marginLeft:'200px'}}>
   <div className="qoral">
    <h1 className='left'>Little Lemon</h1>
    <span  className='lefts'>Chicago</span>
    <p className='movess'>We are a family owned
Mediterranean restrurent.
focused on traditional recipes
served with a modern twist.
</p>
<div>
<Link to="/bookings"><button className='boton'>
Reserve a Table
</button> </Link>

</div>

   </div>
   <div className="sawir iyaad" >
    <img width={'450px'}  style={{marginLeft:'50px'}} src="https://s3-alpha-sig.figma.com/img/bf39/a1ae/74c83c01c8ac904ba019b492bfb35c6c?Expires=1680480000&Signature=X7NV~cYXRGlIVcXJg9C4xZM7c9YYMSXvMXyEeI67niRHsjqZygpJnpnIii-if9aTUalMwUh00R1CWBCFb1c5ATC723kjdwxhRFQ86ziCQv5SqfFhqMu9Sbq7Z-t1haB1PvylUvSJIRQVq2hvWNVGRDZ4jvF8~41Xg60-LFTtxvaQIOHpWlM38JPJE4Arsni3yLahhpzHCp-7bAN9I9Gpl8IVZ576CUCn9NlUV9fCLGYOR0wHc9eZ~ih1m-ERhOGTzeVRvPGriyRsAhyl8izgMISBqIyriKG0FPzpI9amOvbm2CXUeQ0Ur89HYugBbCBgOtU616TnGbUrBbWJT7zD1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
   </div>
    </section> 

    </div>
  )
}

export default section