import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Routes, Route, Link,Switch  } from "react-router-dom";
import Reservition from './pages/Reservition';
import Section from './components/Section';
import Home from './pages/Home';
import Success from './components/Success';


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes> 
   <Route path="/success" element={<Success />}></Route>
       <Route path="/bookings" element={<Reservition />}></Route>
     </Routes>
  
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
