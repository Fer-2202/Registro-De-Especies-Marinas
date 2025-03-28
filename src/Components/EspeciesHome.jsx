import React, { useState, useEffect } from 'react'
import Especies from '../Services/Especies'
import '../Style/Especies.css'


function EspeciesHome() {

  const [Peces, setAnimales] = useState([""])

    useEffect(() => {
     
         async function fetchDataUsers() {
             
           
           const datos = await Especies.getEspecies();
           setAnimales(datos);
           
         };
       
         fetchDataUsers()
         
       }, []);
   



    
  return (
    <div>

      <div className='tituloEs'>
        <h1>Especies Registradas</h1>
      </div>

      <div className='contenedorPez'>
      {Peces.map((Pez,index) => ( 
      <div className='contenedorFotos' key={index}>
      <h2>{Pez.info}</h2>
      <img className='foto' src={ Pez.imagen } alt="" /> <br />
      </div>
        ))} 
      </div>


    </div>
  )
}

export default EspeciesHome