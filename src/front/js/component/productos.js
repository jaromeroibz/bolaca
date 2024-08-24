import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Context } from "../store/appContext";

export const Productos = () =>{

    const { store, actions } = useContext(Context);
    const theid = useParams().theid //id de categoría
    const allproductslength = store.products.length;
    const productslength = store.productsByCategory.length;
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        actions.getProducts()
        actions.getProductByCategory(theid)
    }, [])

    const addToCart = (product) => {

        const exist = cartItems.find((item) => item.id === product.id );
        if (exist){
            const newCartItems = cartItems.map((item) => 
            item.id === product.id ? {...exist, qty: exist.qty + 1} : item
        );
            setCartItems(newCartItems);
        } else {
            const newCartItems = [...cartItems, { ...product, qty: 1 }];
            setCartItems(newCartItems);
        }
        actions.addToCart(cartItems)
    }

    const removeFromCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1){
            const newCartItems = cartItems.filter((item) => item.id !== product.id);
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        } else {
            const newCartItems = cartItems.map((item) => 
            item.id === product.id ? { ...exist, qty: exist.qty -1 } : item
        );
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

        }

    }

    return(
        <>
        <div className="container">
            <div className="productos">
                <h2>Productos</h2>
                <h6 className="py-5">{theid === '999' ? allproductslength : productslength} resultados</h6>
                <div className="row">
                    <div className="col-9">
                        <div className="cards">
                            {theid === '999' ? store.products.map((item) =>
                            <div className="card" style={{width: 284, height: 477}} key= {item.id}>
                                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <div className="d-flex">
                                        <div>
                                            <Link to={`/detalleproductos/${item.id}`} style={{textDecoration: 'none' }}>
                                                <button className="see-more-button d-inline">Ver Más</button>
                                            </Link>
                                        </div>
                                        <div className="px-3">
                                            <button onClick={() => addToCart(item)} className="add-cart-button">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        :
                            store.productsByCategory.map((item) => 
                            <div className="card" style={{width: 284, height: 477}} key= {item.id}>
                                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <div className="d-flex">
                                        <div>
                                            <Link to={`/detalleproductos/${item.id}`} style={{textDecoration: 'none' }}>
                                                <button className="see-more-button d-inline">Ver Más</button>
                                            </Link>
                                        </div>
                                        <div className="px-3">
                                            <button onClick={() => addToCart(item)} className="add-cart-button">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
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