import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { Context } from "../store/appContext";
import Onecursiva from "../../img/1-CURSIVA.jpg";
import Twocursiva from "../../img/2-CURSIVA.jpg";
import Threecursiva from "../../img/3-CURSIVA.jpg";
import Fourcursiva from "../../img/4-CURSIVA.jpg";


export const DetalleProductos = () =>{

    const { store, actions } = useContext(Context);
    const theid = useParams().theid
    const result = store.products.find((item) => item.id == theid )
    console.log(result)

    useEffect(() => {
        actions.getProductDetails()
    }, [])

    var img = document.querySelectorAll('.image')
    var imgCard = document.querySelector('.imgcard')
    var currentIndex = 0;
    var interValId;

    function changeSlide (index){
        currentIndex = index;
        imgCard.style.backgroundImage =  `url(${img[currentIndex].src})`

    }

    img.forEach((image, index) => {
        image.addEventListener('click', function(){
            changeSlide(index)
        })

    })

    function agregarCarrito (){
        
    }

    return(
        <>
        <div className="container">
            <div className="detalle-producto">
                <Link to="/productos">Volver al listado</Link>
                <div className="product-card">
                    <div className="card" style={{width: 1200, height: 1200}}>
                        <div className="row">
                            <div className="col-1 smallimages">
                                <img src={Onecursiva} alt="" className="image"></img>
                                <img src={Twocursiva} alt="" className="image"></img>
                                <img src={Threecursiva} alt="" className="image"></img>
                                <img src={Fourcursiva} alt="" className="image"></img>
                            </div>
                            <div className="col-7">
                                <div className="imgcard"></div>
                                <hr></hr>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{result.name}</h5>
                                        <h5 className="card-price">{result.price}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="d-flex">
                                            <Link to="/finalizar-pedido" style={{textDecoration: 'none' }}>
                                                <button className="card-button d-inline">Comprar ahora</button>
                                            </Link>
                                            <button onClick={agregarCarrito} className="card-button">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card-body">
                                <h6>Características principales</h6>
                                <p>• EMPIEZO A ESCRIBIR (Imprenta)
                                Juego de cartas con grafismos, abecedario y números marcados para iniciarse en la escritura.
                                Cada carta esta laminada para poder usarse todas las veces que se desee.
                                Los niños y las niñas siguen las líneas punteadas usando el marcador y forman letras, números y formas.
                                Contiene actividades sugeridas y marcador con borrador.
                                </p>
                            </div>
                        </div>     
                    </div>
                    

                </div>
            </div>

        </div>
        </>
    );

}