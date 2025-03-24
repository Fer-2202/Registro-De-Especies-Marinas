import React from 'react'
import '../Style/PaginaHome.css'
import payasopez from '../Img/payasopez.jpg'

function PaginaHome() {
  return (
    <div className='fondo'>
      <div>
        <h2>Bienvenido al Registro de <br />
        Especies del Parque Marino</h2>
        <br /><br />
        <h2>Explora nuestra biodiversidad</h2>
        <br />
        <button>Iniciar Sesión</button>
      </div>
      <div>
        <img className='pezpayaso' src= { payasopez } alt="" />
      </div>
    </div>
  )
}

export default PaginaHome