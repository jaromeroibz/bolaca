import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SearchBarResults = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
        <div className="search-bar-results">
            {store.filteredProducts.length > 0 ? (
                <div>
                    {store.filteredProducts.map(product => (
                        <div className="card" style={{width: 284, height: 477}} key= {product.id}>
                            <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <div className="d-flex">
                                    <div>
                                        <Link to={`/detalleproductos/${product.id}`} style={{textDecoration: 'none' }}>
                                            <button className="see-more-button d-inline">Ver Más</button>
                                        </Link>
                                    </div>
                                    <div className="px-3">
                                        <button onClick={() => actions.addToCart(product)} className="add-cart-button">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos que coincidan con tu búsqueda</p>
            )}
        </div>
    </>
    );
};

export default SearchBarResults;
