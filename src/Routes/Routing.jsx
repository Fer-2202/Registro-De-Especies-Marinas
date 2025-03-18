import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Video from '../Components/video';

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/Register" element={<Register/>}/>
                            <Route path='/' element={<Home/>}/>
                            <Route path="/video" element={<Video/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Routing