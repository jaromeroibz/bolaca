import React from "react";
import { Productos } from "./productos";
import { DetalleProductos } from "./detalleProducto";

export const ShoppingCart = (props) =>{
    console.log('estoy en el cart')
    console.log(props.data)

    return(
        <>
        {props.data.map((item,index) =>

            <div>
                {item.name}
            </div>
    
        )
    }</>

    ) 
}