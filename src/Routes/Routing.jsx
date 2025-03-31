import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Contacto from '../Pages/Contacto'
import Home from '../Pages/Home'
import Nosotros from '../Pages/Nosotros'
import Especies from '../Pages/Especies';
import Admin from '../Pages/Admin';
// import RutaPrivada from './RutaPrivada';
import PrivadaRuta from './PrivadaRuta';





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
                  <Route path="/Especies" element={<Especies/>}/>
                  <Route path="/Admin" element={ <PrivadaRuta element={<Admin/>}/>}/>
                       

                  
                  {/* <Route path="/Admin" element={<RutaPrivada element={ <Admin />}> </RutaPrivada>}/>  */}


        </Routes>
      </Router>
    </div>
  );
}

export default Routing