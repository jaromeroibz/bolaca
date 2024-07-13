import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";

export const detalleProductos = () =>{
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts()
    }, [])
    return(
        <h1>Hola</h1>
    );

}