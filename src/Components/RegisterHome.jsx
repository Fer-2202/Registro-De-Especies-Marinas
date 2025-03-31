import React, { useState } from 'react'
import Usuarios from '../Services/Usuarios';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Register.css'

function RegisterHome() {

const [nombreUsuario,SetNombre] = useState("")
const [passwordUsuario,SetContrasena] = useState("")

const navigate = useNavigate() 

function nombre(evento) {

  SetNombre(evento.target.value)
  
}



function password(evento) {
  
  SetContrasena(evento.target.value)

}

  function crear() {

    if (nombreUsuario === "" || passwordUsuario === "") {
        Swal.fire({
            title: 'Error',
            text: 'Llene los espacios',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        
    }else{

    Usuarios.postUsuario(nombreUsuario , passwordUsuario)
    Swal.fire({
        title:"Usuario creado",
        icon: "success",
        draggable: true
      });
      navigate("/Login")
    }

    }

  return (
    <div className='contenedorPrin'>
    
          <div className='contRegis'>
            <h1 className='tituloRegis'>Registrarse</h1>
            <label className='usuarioRegis'>Usuario</label>
            <input className='input' value={nombreUsuario} onChange={nombre} type="text" />
            <label className='tituloContra'>Contraseña</label>
            <input className='input' value={passwordUsuario} onChange={password} type="password" />
            <button className='botonIniciarSesion' onClick={crear}>Crear Usuario</button>

            <p className='linkIniciaSesion'>¿Ya tienes una cuenta? <Link to= "/Login">Inicia Sesion</Link></p>
          </div>

    </div>
  )
}

export default RegisterHome