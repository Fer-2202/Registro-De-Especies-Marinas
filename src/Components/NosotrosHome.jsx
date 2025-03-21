import React from 'react'
import '../Style/Nosotros.css'
import tortuga from '../Img/tortuga.jpg'

function NosotrosHome() {
  return (
    <div>
      <div className='titulo'>
        <h1>Acerca del Registro Del Parque Marino</h1>
      </div>
          <ul className='ContenedorTortu'>
              <div>
                <img className='fototortu' src= { tortuga } alt="" />
              </div>
            <div className='contenedorText'>
              <h2>
                Este registro de fauna marina esta <br /> 
                hecho para tener un registro de todos los <br /> 
                animales que tenemos en nuestros instalaciones y <br />
                esperamos que nuestros visitantes aprendan de las especies
              </h2>
            </div>
          </ul>  
    </div>
  )
}

export default NosotrosHome