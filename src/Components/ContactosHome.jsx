import React from 'react'
import medusita from '../Img/medusita.jpg'
import phone from '../Img/phone.svg'
import '../Style/Contacto.css'

function ContactosHome() {
  return (
    <div>
        <div className='principal'>
            <div>
              <img className='imagenMedusa' src= { medusita } alt="" />
            </div>
            <div className='conta'>
              <h1>Nuestros Contactos</h1>
              <p className='parras'>Correo</p>
              <p className='parras'>moyafer779@gmail.com</p>
              <p className='parras'><img className='phone' src= { phone } alt="" />  Numero</p>
              <p className='parras'>8947 8346</p>
              <p className='parras'>Dirección</p>
              <p className='parras'>600 metros este del muelle de cruceros, Puntarenas, Costa Rica, 60101.</p>

            </div>

        </div>

    </div>
  )
}

export default ContactosHome