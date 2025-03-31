import React from "react";
import { Navigate } from "react-router-dom";

const RutaPrivada = ({ element }) => {
    const encontrado = JSON.parse(localStorage.getItem("usuarios"));

    // Verifica si el usuario existe y tiene el rol "Admin"
    return encontrado && encontrado.rol === "admin" ? element : <Navigate to="/Login" />;
};

export default RutaPrivada;