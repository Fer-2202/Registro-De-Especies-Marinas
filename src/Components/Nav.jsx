import React from 'react'
import logopez from "../Img/logopez.png"
import '../Style/Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>

        <nav className='conte'>
            <div>
                <img className='foto' src= { logopez } alt="" />
            </div>
                <div>
                   <h2> Registro de Especies Marinas <br />
                   del Parque Marino</h2>
                </div>
                        <div>
                          <h3><Link to= "/">Inicio</Link></h3>
                        </div>
                          <div>
                          <h3><Link to= "/Nosotros">Nosotros</Link></h3>
                          </div>
                            <div>
                               <h3><Link to= "/Especies">Especies</Link></h3>
                            </div>
                                <div>
                                    <h3><Link to= "/Contacto">Contactos</Link></h3>
                                </div>
        </nav>

    </div>
  )
}

export default Nav