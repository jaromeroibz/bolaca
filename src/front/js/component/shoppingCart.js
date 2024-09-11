import React, {useContext} from "react";
import { Productos } from "./productos";
import { Context } from "../store/appContext";


export const ShoppingCart = () =>{

    const { store, actions } = useContext(Context);
    const itemsPrice = store.cart.reduce((a,c) => a + c.qty * c.price, 0);
    // const shippingCost = {
    //     'Santiago Centro' : 3000,
    //     'La Florida' : 3000
    // }
    const shippingCost = 3000;
    const shippingPrice = itemsPrice > 20000 ? 0 : shippingCost;
    const totalPrice = shippingCost + shippingPrice;
    return(
        <>
        <div className="container py-5">
            {store.cart.length === 0 ? <h1>Tu carrito está vacío</h1>
            :
                <div className="cart">
                    <h1>Tu carrito</h1>
                        <div className="row">
                            {store.cart.map((item) =>
                            <div className="col-8">
                                <div className="card" style={{width: 800, height: 100}}>
                                    <div className="d-flex">
                                        <div className="px-5">
                                            <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap" style={{width: 60, height: 60}}></img>
                                        </div>
                                        <h6 className="px-5">{item.name}</h6>
                                        <div className="qty px-5">
                                        {item ? (
                                            <div>
                                                <button onClick={() => actions.removeFromCart(item)}>-</button>
                                                <span className="p-1">{item.qty}</span>
                                                <button onClick={() => actions.addToCart(item)}>+</button>
                                            </div>
                                        ) : (
                                            <button onClick={() => actions.addToCart(item)}></button>
                                        )
                                        }
                                        </div>
                                        <div className="total-price px-5">${item.price*item.qty}</div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                            <div className="col-4 resumen-compra">
                                <div className="card">
                                    <h3>Resumen compra</h3>
                                    <hr></hr>
                                    <div><p>Productos ({store.cart.length}) {itemsPrice}</p></div>
                                    <div className="d-flex"></div>
                                    <div><p>Costo de envío {shippingCost}</p></div>
                                    <div><p>Total {totalPrice}</p></div>
                                    <button>Ir a pagar</button>
                                </div>
                            </div>
                        </div>
                </div>
            }
        </div>
        </>
    )

}
