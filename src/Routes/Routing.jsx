import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';



function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        
                          
                            <Route path="/Login" element={<Login/>}/>
                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing