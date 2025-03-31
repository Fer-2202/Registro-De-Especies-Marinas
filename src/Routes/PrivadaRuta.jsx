import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivadaRuta = ({element}) => {
  const visitantencontrado = !!localStorage.getItem("token");

  if (visitantencontrado) {
    return element;
    
  } else {
    return <Navigate to="/Login"/>;
    
  }
  
};


export default PrivadaRuta
