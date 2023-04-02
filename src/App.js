import React from 'react';
import './App.css';

import Home from './pages/Home'


import Reservition from './pages/Reservition'

import { Routes, Route, Link } from "react-router-dom";
function App() {

  return( 
  <>
   <Routes> 
    <Route path="/" element={<Home />}></Route>
     <Route path="/booking" element={<Reservition />}></Route>
   </Routes> 
   
  </>
   
  ) 
}

export default App;
