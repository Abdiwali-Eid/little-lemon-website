import React from 'react'
import Logo from '../assets/Logo .svg'
import Salad from '../assets/green salad.jfif'
import Lemmon from '../assets/lemmon desert.jfif'
import Brusta from '../assets/brustecha.jpg'
import Avater from '../assets/avater.jfif'
import dhex from '../assets/dhex.PNG'
import {AiFillStar} from 'react-icons/ai'
const Testmonials = () => {
  return (
    <div>
        
        

 <div className="testnomials" >
    <h1 style={{textAlign:'center', paddingTop:'10px'}}>Testmonials</h1>
    <div className="testcards" >
    <div className="persons" style={{width:'450px',marginBottom:'10px'}}>
        <div className="i" style={{marginLeft:'50px'}}>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           
        
        </div>
        <div className="imgs">
            <img src={Avater}  alt=""  width={'100px'} style={{marginLeft:'40px'}}/>
            <span style={{fontSize:'20px', marginLeft:'4px',fontWeight:'bold'}}>Axmed xasan cali</span>
        </div>
        <p style={{marginLeft:'40px',}}>"Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!<br/>
        Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!"
        </p>
    </div>

    <div className="persons" style={{width:'450px',marginBottom:'10px'}}>
        <div className="i" style={{marginLeft:'50px'}}>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           
        
        </div>
        <div className="imgs">
            <img src={Avater}  alt=""  width={'100px'} style={{marginLeft:'40px'}}/>
            <span style={{fontSize:'20px', marginLeft:'4px',fontWeight:'bold'}}>Axmed xasan cali</span>
        </div>
        <p style={{marginLeft:'40px'}}>"Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!<br/>
        Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!"
        </p>
    </div>
    <div className="persons" style={{width:'450px',marginBottom:'10px'}}>
        <div className="i" style={{marginLeft:'50px'}}>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           <AiFillStar style={{color:'#f4ce14'}}/>
           
        
        </div>
        <div className="imgs">
            <img src={Avater}  alt=""  width={'100px'} style={{marginLeft:'40px'}}/>
            <span style={{fontSize:'20px', marginLeft:'4px',fontWeight:'bold'}}>Axmed xasan cali</span>
        </div>
        <p style={{marginLeft:'40px'}}>"Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!<br/>
        Lorem ipsum dolor sit ametb consectetur<br/> adipisicing elit. Accusamus, nihil!"
        </p>
    </div>
    
    </div>
   
</div>
    </div>
  )
}

export default Testmonials