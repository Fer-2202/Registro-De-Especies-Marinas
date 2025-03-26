import React from 'react'
import '../Style/Footer.css'
import {Link} from 'react-router-dom'
import '../Style/Footer.css'
import facebook from '../Img/facebook.svg'
import instagram from '../Img/instagram.svg'
import tiktok from '../Img/tiktok.svg'
import youtube from '../Img/youtube.svg'


function FooterHome() {
  return (
    <div>

        <footer className='cont'>
                        <div>
                          <p>Contáctanos</p>
                          <p>
                            600 metros este del <br />
                            muelle de cruceros, <br />
                            Puntarenas, Costa Rica, 60101.
                          </p>
                      
                          <p>
                            contacto@parquemarino.org
                          </p>
          
                          <p>
                          (506) 2661-5272
                          </p>
                        </div>
                          <div>
                          <p><Link to= "/Register">Menú Principal</Link></p>
                          <p><Link to= "/">Inicio</Link></p>
                          <p><Link to= "/Nosotros">Nosotros</Link></p>
                          <p><Link to= "/Especies">Especies</Link></p>
                          <p><Link to= "/Contacto">Contactos</Link></p>

                          </div>
                           
                                <div className='redes'>
                               
                                  <div>
                                    <p>
                                      <Link to= "https://www.facebook.com/parquemarinodelpacifico/"> <img className='face' src= { facebook } alt="" /></Link>
                                    </p>
                                  </div>
                                  <div>
                                    <p>
                                      <Link to= "https://www.instagram.com/parque.marino.del.pacifico/"> <img className='face' src= { instagram } alt="" /></Link>
                                    </p>
                                  </div>
                                  <div>
                                   <p>
                                    <Link to= "https://www.tiktok.com/@parquemarinodelpacifico"> <img className='face' src= { tiktok } alt="" /></Link>
                                  </p>
                                  </div>
                                  <div>
                                  <p>
                                    <Link to= "https://www.youtube.com/@ParqueMarino"> <img className='face' src= { youtube } alt="" /></Link>
                                  </p>
                                  </div>

                                </div>
        </footer>

    </div>
  )
}

export default FooterHome