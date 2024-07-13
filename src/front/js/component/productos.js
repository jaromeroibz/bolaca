import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";

export const Productos = () =>{
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts()
    }, [])

    function agregarCarrito (){
        
    }
    return(
        <>
        <div className="container">
            <div className="productos">
                <h2>Productos</h2>
                <h6 className="py-5">33 resultados</h6>
                <div className="row">
                    <div className="col-9">
                        <div className="cards">
                            {store.products.map((item) => 
                            <div className="card" style={{width: 284, height: 477}}>
                                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <div className="d-flex">
                                        <Link to="/detalle-productos" style={{textDecoration: 'none' }}>
                                            <button className="card-button d-inline">Ver más</button>
                                        </Link>
                                        <button onClick={agregarCarrito} className="card-button">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="col-3 px-5">
                        <h6>Precio</h6>
                        <p>10.999-19.990</p>
                        <hr></hr>
                        <h6>Marca</h6>
                        <p>Disney</p>
                        <hr></hr>
                        <h6>Edad</h6>
                        <p>0-2 años</p>
                        <p>3-6 años</p>
                        <p>7-10 años</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}