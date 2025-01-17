import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext.js";

export const LogOut = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("auth"); 
    window.location.href = '/login';
    
    return (
        <h1>Cargando...</h1>
    )

    };