import React from "react";

const LogOut = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("auth"); 
    window.location.href = '/login';
    
    return (
        <h1>Cargando...</h1>
    );
};

export default LogOut;
