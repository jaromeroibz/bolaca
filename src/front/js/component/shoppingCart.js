import React, { useContext, useState } from "react";
import { AppContext  } from "../store/appContext.js";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

const ShoppingCart = () => {
    const { store, actions } = useContext(AppContext );

    initMercadoPago('APP_USR-f83fb519-a60f-49aa-a55a-dba0f0357ac9', {
        locale: "es-CL"
    });

    const [preferenceId, setPreferenceId] = useState(null);
    
    const createPreference = async () => {
        try {
            const response = await axios.post("https://effective-palm-tree-5ww6qprg57rfwv7-4000.app.github.dev/create_preference", {
                title: "Producto 1",
                quantity: 1,
                price: 100,
            });

            const { id } = response.data;

            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    const itemsPrice = store.cart.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingCost = 3000;
    const shippingPrice = itemsPrice > 20000 ? 0 : shippingCost;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <>
            <div className="container">
                {store.cart.length === 0 ? (
                    <h1>Tu carrito está vacío</h1>
                ) : (
                    <div className="cart">
                        <h3>Tu carrito</h3>
                        <div className="d-xl-inline-flex py-3">
                            <div className="card product-list">
                                {store.cart.map((item, id) => (
                                    <div className="py-3" key={id}>
                                        <div className="cart-product" style={{ width: 800, height: 100 }}>
                                            <div className="d-flex">
                                                <div className="px-xs-2 px-sm-3 px-md-4 px-lg-5">
                                                    <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap" style={{ width: 60, height: 60 }} />
                                                </div>
                                                <h6 className="px-xs-2 px-sm-3 px-md-4 px-lg-5">{item.name}</h6>
                                                <div className="qty px-xs-2 px-sm-3 px-md-4 px-lg-5">
                                                    {item ? (
                                                        <div>
                                                            <button className="qty-btn border-0 shadow-none" onClick={() => actions.removeFromCart(item)}>-</button>
                                                            <span className="p-1">{item.qty}</span>
                                                            <button className="qty-btn border-0 shadow-none" onClick={() => actions.addToCart(item)}><i className="fa-regular fa-plus"></i></button>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => actions.addToCart(item)}></button>
                                                    )}
                                                </div>
                                                <div className="total-price px-xs-2 px-sm-3 px-md-4 px-lg-5">${item.price * item.qty}</div>
                                            </div>
                                            <hr className="custom-hr" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-5">
                                <div className="card py-3 py-md-3 px-5" style={{ width: 450, height: 300 }}>
                                    <h3 className="mx-auto">Resumen compra</h3>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <p>Productos: ({store.cart.length})</p>
                                        <p>{itemsPrice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Costo de envío:</p>
                                        <p>{shippingPrice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Total:</p>
                                        <p>{totalPrice}</p>
                                    </div>
                                    <button onClick={handleBuy} className="add-cart-button">Ir a pagar</button>
                                    {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ShoppingCart;
