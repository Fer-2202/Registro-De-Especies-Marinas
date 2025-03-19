import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import Nosotros from '../Pages/Nosotros'

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
                  <Route path="/Nosotros" element={<Nosotros/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/Register" element={<Register/>}/>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Routing