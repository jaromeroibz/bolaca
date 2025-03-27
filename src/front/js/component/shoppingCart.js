import React, { useContext, useState } from "react";
import { AppContext  } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

const ShoppingCart = () => {
    const { store, actions } = useContext(AppContext );
    const [preferenceId, setPreferenceId] = useState(null);
    const itemsPrice = store.cart.reduce((a, c) => a + c.qty * c.price, 0);

    initMercadoPago(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
        locale: "es-CL"
    });

    const createPreference = async () => {
        try {
            const items = store.cart.map(item => ({
                title: item.name,
                quantity: parseInt(item.qty), 
                unit_price: parseFloat(item.price),
                product_image: item.image,
                description: item.description || item.name,
                id: item.id || String(Math.random())
            }));

            const response = await axios.post(`${process.env.BACKEND_URL}/create_preference`, 
                { items },
                {
                    withCredentials: true, 
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}` 
                    }
                }
            );
    
            if (response.data && response.data.id) {
                setPreferenceId(response.data.id);
                return response.data.id;
            }
        } catch (error) {
            console.error("Error creating preference:", error);
            alert("Error creating payment preference. Please try again.");
        }
    };

        // Add MercadoPago Wallet customization
        const renderCheckoutButton = (preferenceId) => {
            if (preferenceId) {
                return (
                    <Wallet 
                        initialization={{ preferenceId: preferenceId }}
                        customization={{
                            texts: { 
                                valueProp: 'smart_option',
                            },
                            visual: {
                                buttonBackground: 'black',
                                borderRadius: '6px',
                            }
                        }}
                    />
                );
            }
        };
    

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    const shippingCost = 0;
    const shippingPrice = itemsPrice > 20000 ? 0 : shippingCost;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <>
            <div className="container">
                <Link
                    to={`/productos`}
                    style={{ textDecoration: "none" }}
                >
                    Volver al listado
                </Link>
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
                                            <div className="d-flex align-items-center">
                                                <img
                                                    className="card-img-top ms-4 me-4"
                                                    src={item.image}
                                                    alt="Card image cap"
                                                    style={{ width: 90, height: 90 }}
                                                />
                                                <h6 className="product-name mb-0 me-4" style={{ width: '450px' }}>{item.name}</h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="qty me-3">
                                                        {item ? (
                                                            <div className="d-flex align-items-center">
                                                                <button
                                                                    className="qty-btn border-0 shadow-none"
                                                                    onClick={() => actions.removeFromCart(item)}
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="px-2">{item.qty}</span>
                                                                <button
                                                                    className="qty-btn border-0 shadow-none"
                                                                    onClick={() => actions.addToCart(item)}
                                                                >
                                                                    <i className="fa-regular fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <button onClick={() => actions.addToCart(item)}></button>
                                                        )}
                                                    </div>
                                                    <div className="total-price">${item.price * item.qty}</div>
                                                </div>
                                            </div>
                                            <hr className="custom-hr" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="px-5">
                                <div className="card py-3 py-md-3 px-5" style={{ width: 450}}>
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
                                    {!preferenceId ? (
                                        <button onClick={handleBuy} className="add-cart-button">
                                            Ir a pagar
                                        </button>
                                    ) : (
                                        renderCheckoutButton(preferenceId)
                                    )}
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
