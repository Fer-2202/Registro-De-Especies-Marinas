import React from 'react'
import '../Style/PaginaHome.css'
import payasopez from '../Img/payasopez.jpg'
import {Link} from 'react-router-dom'

function PaginaHome() {
  return (
    <div className='cuerpoPagina'>

    <div className="container">

    <h2 className="tituloUno">
      Bienvenido al Registro de <br /> Especies del <span className="highlight">Parque Marino</span>
    </h2>
    <h2 className="tituloDos">Explora nuestra biodiversidad</h2>
    <button className='botonRegisPri'>
      <Link className="link" to="/Register">Inicia Sesión</Link>
    </button>
    <div className='imagenPezPayaso'>
      <img className="pezpayaso" src={payasopez} alt="Pez Payaso" />
    </div>

    </div>

  </div>
  )
}

export default PaginaHome