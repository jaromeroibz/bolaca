import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const DetalleProductos = () => {
    const { store, actions } = useContext(Context);
    const theid = useParams().theid;
    const product = store.products.find((item) => item.id == theid);
    const [cart, setCart] = useState([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [customQuantity, setCustomQuantity] = useState("");
    const [currentImage, setCurrentImage] = useState(0);
    const productImages = [product.image, product.image2, product.image3]; // Adjust based on AWS images

    useEffect(() => {
        actions.getProducts();
    }, []);

    const addToCart = (product) => {
        const quantityToAdd =
            selectedQuantity === "more" ? Number(customQuantity) : selectedQuantity;
        const updatedProduct = { ...product, quantity: quantityToAdd };
        setCart([...cart, updatedProduct]);
        actions.addToCartQty(product, quantityToAdd)
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === "more") {
            setSelectedQuantity("more");
            setCustomQuantity(""); // Reset custom quantity
        } else {
            setSelectedQuantity(Number(value));
        }
    };

    const handleCustomQuantityApply = () => {
        if (customQuantity && !isNaN(customQuantity) && Number(customQuantity) > 0) {
            setSelectedQuantity(Number(customQuantity));
        }
    };

    return (
        <>
            <div className="container">
                <div className="detalle-producto">
                    <Link
                        to={`/productos`}
                        style={{ textDecoration: "none" }}
                    >
                        Volver al listado
                    </Link>
                    <div className="product-card">
                        <div className="card" style={{ width: 1200, height: 1200 }}>
                            <div className="row">
                                <div className="col-1 smallimages">
                                    {productImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            onClick={() => setCurrentImage(index)}
                                            alt="product image"
                                            className="image"
                                        />
                                    ))}
                                </div>
                                <div className="col-7">
                                    <img
                                        src={productImages[currentImage]}
                                        height={600}
                                        width={600}
                                        alt="Main product"
                                    />
                                    <hr />
                                </div>
                                <div className="col-4 product-info">
                                    <div className="card">
                                        <div className="card-body">
                                            {product.isDestacado && (
                                                <h6 style={{ color: "grey" }}>Destacado</h6>
                                            )}
                                            <h4
                                                className="card-title"
                                                style={{ fontWeight: "900" }}
                                            >
                                                {product.name}
                                            </h4>
                                            <h1
                                                className="card-price"
                                                style={{ fontWeight: "400" }}
                                            >
                                                ${product.price}
                                            </h1>
                                            {product.stock === 1 ? (
                                                <h4 style={{ fontWeight: "300" }}>
                                                    ¡Última unidad disponible!
                                                </h4>
                                            ) : product.stock === 0 ? (
                                                <h4 style={{ fontWeight: "300" }}>
                                                    Sin Stock
                                                </h4>
                                            ) : product.stock < 10 ? (
                                                <h4 style={{ fontWeight: "300" }}>
                                                    ¡Pocas unidades disponibles!
                                                </h4>
                                            ) : ''}
                                            <div className="py-5">
                                                {/* Quantity Selector */}
                                                <form className="quantity-form">
                                                    <label
                                                        htmlFor="quantity-select"
                                                        className="quantity-label"
                                                    >
                                                        Cantidad:{" "}
                                                        <span className="quantity-value">
                                                            {selectedQuantity === "more"
                                                                ? customQuantity || "—"
                                                                : selectedQuantity}
                                                        </span>{" "}
                                                        unidades
                                                    </label>
                                                    <select
                                                        id="quantity-select"
                                                        className="quantity-select"
                                                        aria-label="Select quantity"
                                                        value={
                                                            selectedQuantity === "more"
                                                                ? "more"
                                                                : selectedQuantity
                                                        }
                                                        onChange={handleQuantityChange}
                                                        disabled={product.stock === 0}
                                                    >
                                                        {Array.from(
                                                            { length: Math.min(product.stock, 6) },
                                                            (_, i) => (
                                                                <option
                                                                    key={i + 1}
                                                                    value={i + 1}
                                                                >
                                                                    {i + 1} unidad
                                                                    {i + 1 > 1 ? "es" : ""}
                                                                </option>
                                                            )
                                                        )}
                                                        {product.stock > 6 && (
                                                            <option value="more">
                                                                Más de 6
                                                            </option>
                                                        )}
                                                    </select>
                                                    {selectedQuantity === "more" && (
                                                        <div className="custom-quantity">
                                                            <label htmlFor="custom-quantity-input">
                                                                Cantidad:
                                                            </label>
                                                            <input
                                                                type="number"
                                                                id="custom-quantity-input"
                                                                className="custom-quantity-input"
                                                                min="7"
                                                                max={product.stock}
                                                                value={customQuantity}
                                                                onChange={(e) =>
                                                                    setCustomQuantity(
                                                                        e.target.value
                                                                    )
                                                                }
                                                                placeholder="7"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="apply-button"
                                                                onClick={handleCustomQuantityApply}
                                                                disabled={
                                                                    !customQuantity ||
                                                                    isNaN(customQuantity) ||
                                                                    customQuantity < 7 ||
                                                                    customQuantity > product.stock
                                                                }
                                                            >
                                                                Aplicar
                                                            </button>
                                                        </div>
                                                    )}
                                                    {product.stock > 10 && (
                                                        <span className="stock-info">
                                                            (+{product.stock} disponibles)
                                                        </span>
                                                    )}
                                                </form>
                                                <div className="p-3"> 
                                                    <Link to="/cart" style={{textDecoration: 'none' }}>
                                                        <button onClick={() => addToCart(product)} className="buy-now-button" disabled={product.stock === 0}>Comprar ahora</button>
                                                    </Link>
                                                </div>
                                                {/* Add to Cart */}
                                                <div className="px-3">
                                                    <button
                                                        onClick={() => addToCart(product)}
                                                        className="add-cart-details-button"
                                                        disabled={product.stock === 0}
                                                    >
                                                        Agregar al carrito
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-7">
                                    <div className="card-body">
                                        <h6>Características principales</h6>
                                        Marca {product.brand.name}
                                        Nombre {product.name}
                                        <h6>Descripción</h6>
                                        {product.description}
                                    </div>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
