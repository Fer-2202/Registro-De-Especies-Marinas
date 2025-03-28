import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const privada = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />

};

function RutaPrivada() {

    const privada = ({ isAuthenticated }) => {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
    };
  return (
    <div>

    </div>
  )
}

export default RutaPrivada