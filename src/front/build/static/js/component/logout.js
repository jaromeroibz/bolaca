import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const LogOut = () => {

    // Elimina el token de localStorage (o cookies, dependiendo de cómo lo guardaste)
    localStorage.removeItem("token");
    localStorage.removeItem("auth"); 
    window.location.href = '/login'; 
    
    };