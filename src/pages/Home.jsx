import React from 'react'
import Header from '../components/Header';
import Section from '../components/Section';

import Testmonials from './Testmonials';
import Footer from '../components/Footer';
import Dhex from '../components/Dhex';
import Main from '../components/Main';
import ReservationsPage from './ReservationsPage';
import Success from '../components/Success';
// import Forms from './Form'
import './home.css'
import Forms from './Bookingform'
const Home = () => {
  return ( 
    <>

   <Header/>
     <Section/>
     <Main/>
     <Testmonials/>
     <Dhex/>
     {/* <Forms/> */}
     <Footer/>
     

     {/* <Forms/> */}
     
     



    </>
  ) 
}
// footerka copy mid ka soo dheh.

export default Home