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
    <div>
        <div>
            <br /><br />
          <div className='contRegis'>
            <h1>Registrarse</h1>
            <br />
            <label>Usuario</label>
            <input value={nombreUsuario} onChange={nombre} type="text" />
            <br /><br />
            <label>Contraseña</label>
            <input value={passwordUsuario} onChange={password} type="text" />
            <br /><br />
            <button onClick={crear}>Crear Usuario</button>

            <p>¿Ya tienes una cuenta? <Link to= "/Login">Inicia Sesion</Link></p>
          </div>

        </div>

    </div>
  )
}

export default RegisterHome