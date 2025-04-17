import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

const ShoppingCart = () => {
    const { store, actions } = useContext(AppContext);
    const [preferenceId, setPreferenceId] = useState(null);
    const [currentOrder, setCurrentOrder] = useState(null);
    const itemsPrice = store.cart.reduce((a, c) => a + c.qty * c.price, 0);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const [customerDetails, setCustomerDetails] = useState({
        name: "",
        email: "",
        phone: "",
        street: "",
        streetNumber: "",
        city: "",
        province: "",
        postalCode: ""
    });

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
                { 
                    items,
                    customer: currentOrder
                },
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
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCustomerDetails({
            ...customerDetails,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
            alert("Por favor complete todos los campos requeridos");
            return;
        }
        
        try {
            if (actions.addCustomerDetails) {
                const newOrder = actions.addCustomerDetails(customerDetails);
                setCurrentOrder(newOrder);
            } else {
                actions.setCustomerDetails(customerDetails);
                setCurrentOrder({
                    ...customerDetails,
                    orderId: `order-${Date.now()}`,
                    timestamp: new Date().toISOString(),
                    items: store.cart
                });
            }
            
            handleBuy();
        } catch (error) {
            console.error("Error saving customer details:", error);
            
            const orderData = {
                ...customerDetails,
                orderId: `order-${Date.now()}`,
                timestamp: new Date().toISOString(),
                items: store.cart
            };
            
            try {
                const existingOrders = JSON.parse(localStorage.getItem('customerOrders') || '[]');
                existingOrders.push(orderData);
                localStorage.setItem('customerOrders', JSON.stringify(existingOrders));
            } catch (e) {
                localStorage.setItem('currentOrder', JSON.stringify(orderData));
            }
            
            setCurrentOrder(orderData);
            handleBuy();
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    const shippingPrice = 0;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <>
            <div className="container">
                <Link
                    to={`/productos`}
                    style={{ textDecoration: "none" }}
                    className="mb-3 d-inline-block"
                >
                    Volver al listado
                </Link>
                {store.cart.length === 0 ? (
                    <div className="empty-cart">
                        <h1>Tu carrito está vacío</h1>
                        <p className="mt-3">Parece que no has agregado productos a tu carrito aún.</p>
                        <Link to="/productos" className="add-cart-button">
                            Seguir comprando
                        </Link>
                    </div>
                ) : (
                    <div className="cart">
                        <h3>Tu carrito</h3>
                        <div className="row py-3">
                            <div className="col-md-5 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title text-center mb-3">Resumen compra</h4>
                                        <hr />
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Productos: ({store.cart.length})</span>
                                            <span>${itemsPrice}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Costo de envío:</span>
                                            <span>Envío por pagar Starken</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <span className="fw-bold">Total:</span>
                                            <span className="fw-bold">${totalPrice}</span>
                                        </div>
                                        
                                        <h4 className="card-title text-center mt-4 mb-3">Datos de contacto</h4>
                                        <hr />
                                        
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label fw-bold">Nombre completo*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value={customerDetails.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label fw-bold">Email*</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={customerDetails.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label fw-bold">Teléfono*</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    value={customerDetails.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="row mb-3">
                                                <div className="col-8">
                                                    <label htmlFor="street" className="form-label fw-bold">Calle*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="street"
                                                        value={customerDetails.street}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <label htmlFor="streetNumber" className="form-label fw-bold">Número*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="streetNumber"
                                                        value={customerDetails.streetNumber}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <label htmlFor="city" className="form-label fw-bold">Ciudad*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="city"
                                                    value={customerDetails.city}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            
                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <label htmlFor="province" className="form-label fw-bold">Comuna*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="province"
                                                        value={customerDetails.province}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="postalCode" className="form-label fw-bold">Código Postal*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="postalCode"
                                                        value={customerDetails.postalCode}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            {!preferenceId ? (
                                                <button type="submit" className="btn btn-dark w-100 mt-3">
                                                    Ir a pagar
                                                </button>
                                            ) : (
                                                <div className="mt-3">
                                                    {renderCheckoutButton(preferenceId)}
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-7 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        {store.cart.map((item, idx) => (
                                            <div className="mb-3" key={idx}>
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        className="img-fluid me-3"
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{ width: 90, height: 90, objectFit: 'contain' }}
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">{item.name}</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <button
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                    onClick={() => actions.removeFromCart(item)}
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="px-2">{item.qty}</span>
                                                                <button
                                                                    className="btn btn-sm btn-outline-secondary"
                                                                    onClick={() => actions.addToCart(item)}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                            <div className="fw-bold">
                                                                ${item.price * item.qty}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {idx < store.cart.length - 1 && <hr className="my-3" />}
                                            </div>
                                        ))}
                                    </div>
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