import React, { useEffect, useState } from 'react'
import Usuarios from '../Services/Usuarios'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import '../Style/Login.css'

function LoginHome() {

const [nombre,SetNombre] = useState()
const [contrasena,SetContrasena] = useState()
const [usuarios,SetUsuarios] = useState()

const navigate = useNavigate()

useEffect(() => {

  async function fetchDataUsers() {

    const datos = await Usuarios.getUsuario()

    SetUsuarios(datos)
    
  };

  fetchDataUsers()
  
});

function nombreUsuario(evento) {
  
  SetNombre(evento.target.value)

}

function contrasenaUsario(evento) {

  SetContrasena(evento.target.value)
  
}

function validacion() {
  
const encontrado = usuarios.filter(usuarios => usuarios.nombre === nombre && usuarios.contrasena === contrasena)
 
if (encontrado.length === 0) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Usuario incorrecto",
  });
} if (encontrado[0].rol === "admin") {

  navigate("/Admin")

} else {


  navigate("/")

  
}

}

  return (
    <div>

        <div className='contLogin'>

            <label>Usuario</label>
            <input value={nombre} onChange={nombreUsuario} type="text" />
            <br /><br />
            <label>Contraseña</label>
            <input value={contrasena} onChange={contrasenaUsario} type="text" />
            <button onClick={validacion}>Iniciar</button>

            <p>¿No tienes una cuenta? <Link to= "/Register">¡Registrate aquí!</Link></p>
        </div>

    </div>
  )
}

export default LoginHome