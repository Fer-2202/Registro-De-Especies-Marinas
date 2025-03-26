import React from 'react'
import '../Style/PaginaHome.css'
import payasopez from '../Img/payasopez.jpg'
import {Link} from 'react-router-dom'

function PaginaHome() {
  return (
    <div className='fondo'>
      <div>
        <h2>Bienvenido al Registro de <br />
        Especies del Parque Marino</h2>
        <br /><br />
        <h2>Explora nuestra biodiversidad</h2>
        <br />
        <button><Link to= "/Register">Inicia Sesion</Link></button>
      </div>
      <div>
        <img className='pezpayaso' src= { payasopez } alt="" />
      </div>
    </div>
  )
}

export default PaginaHome