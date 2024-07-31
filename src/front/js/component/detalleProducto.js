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
  
    const [currentImage, setCurrentImage] = useState(0);
    const productImages = [Onecursiva,Twocursiva,Threecursiva,Fourcursiva] // cambiar esto para que tome en cuenta las imagenes llamadas desde AWS

    useEffect(() => {
        actions.getProductDetails()
    }, [])

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
                                <img src={productImages[0]} onClick={e => (setCurrentImage(0))} alt="product image" className="image"></img>
                                <img src={productImages[1]} onClick={e => (setCurrentImage(1))} alt="product image" className="image"></img>
                                <img src={productImages[2]} onClick={e => (setCurrentImage(2))} alt="product image" className="image"></img>
                                <img src={productImages[3]} onClick={e => (setCurrentImage(3))} alt="product image" className="image"></img>
                            </div>
                            <div className="col-7">
                                <img src = {productImages[currentImage]} height={600} width={600} ></img>
                                <hr></hr>
                            </div>
                            <div className="col-4 product-info">
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className="card-title">{result.name}</h4>
                                        <h1 className="card-price">${result.price}</h1>
                                        <h4 className="card-body">Mismo precio en 3 cuotas de {result.price} / 3 </h4>
                                        { result.name === 1 ? <h4>¡Última unidad disponible!</h4> : result.name === 0 ? <h4>Sin Stock : </h4> <h4>¡Pocas unidades disponibles!</h4>}
                                        <div className="py-5">
                                            <div>
                                                <Link to="/finalizar-pedido" style={{textDecoration: 'none' }}>
                                                    <button className="buy-now-button">Comprar ahora</button>
                                                </Link>
                                            </div>
                                            <div className="px-3">
                                                <button onClick={agregarCarrito} className="add-cart-details-button">Agregar al carrito</button>
                                            </div>
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