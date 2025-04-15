import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../store/appContext.js";

const DetalleProductos = () => {
    const { store, actions } = useContext(AppContext);
    const theid = useParams().theid;
    const product = store.products.find((item) => item.id == theid);
    const [cart, setCart] = useState([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [customQuantity, setCustomQuantity] = useState("");
    const [currentImage, setCurrentImage] = useState(0);
    const productImages = [product.image, product.image2, product.image3];

    // Scroll to top when the component loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        actions.getProducts();
    }, []);

    const addToCart = (product) => {
        const quantityToAdd =
            selectedQuantity === "more" ? Number(customQuantity) : selectedQuantity;
        const updatedProduct = { ...product, quantity: quantityToAdd };
        setCart([...cart, updatedProduct]);
        actions.addToCartQty(product, quantityToAdd);
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
        <div className="container">
            <div className="detalle-producto">
                <Link to={`/productos`} className="back-to-list">
                    Volver al listado
                </Link>
                <div className="product-card">
                    <div className="row">
                        {/* Product Image Gallery */}
                        <div className="col-md-1 smallimages">
                            {productImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    onClick={() => setCurrentImage(index)}
                                    alt="product thumbnail"
                                    className={`image ${currentImage === index ? "active" : ""}`}
                                />
                            ))}
                        </div>

                        {/* Main Product Image */}
                        <div className="col-md-6">
                            <div className="main-image-container">
                                <img
                                    src={productImages[currentImage]}
                                    alt="Main product"
                                    className="main-product-image"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="col-md-5 product-info">
                            <div className="product-details-card">
                                <div className="card-body">
                                    {product.is_destacado && (
                                        <h6 className="product-highlight">Destacado</h6>
                                    )}
                                    <h4 className="product-title">{product.name}</h4>
                                    <h1 className="product-price">${product.price}</h1>

                                    {/* Stock Information */}
                                    {product.stock === 1 ? (
                                        <h4 className="stock-warning">¡Última unidad disponible!</h4>
                                    ) : product.stock === 0 ? (
                                        <h4 className="stock-warning">Sin Stock</h4>
                                    ) : product.stock < 10 ? (
                                        <h4 className="stock-warning">¡Pocas unidades disponibles!</h4>
                                    ) : (
                                        ""
                                    )}

                                    {/* Quantity Selector */}
                                    {product.stock >= 1 && (
                                        <div className="quantity-section py-4">
                                            <form className="quantity-form">
                                                <label htmlFor="quantity-select" className="quantity-label">
                                                    Cantidad:
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
                                                            <option key={i + 1} value={i + 1}>
                                                                {i + 1} unidad
                                                                {i + 1 > 1 ? "es" : ""}
                                                            </option>
                                                        )
                                                    )}
                                                    {product.stock > 6 && (
                                                        <option value="more">Más de 6</option>
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
                                                                setCustomQuantity(e.target.value)
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
                                            </form>
                                        </div>
                                    )}

                                    {/* Add to Cart Buttons */}
                                    <div className="action-buttons">
                                        <Link to="/cart">
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="buy-now-button"
                                                disabled={product.stock === 0}
                                            >
                                                Comprar ahora
                                            </button>
                                        </Link>
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

                    {/* Product Description */}
                    <div className="row mt-4">
                        <div className="col-md-8">
                            <div className="product-details">
                                <h6 className="details-title">Características principales</h6>
                                <div className="details-item">
                                    <span className="details-label">Marca:</span>
                                    <span className="details-value">{product.brand.name}</span>
                                </div>
                                <div className="details-item">
                                    <span className="details-label">Nombre:</span>
                                    <span className="details-value">{product.name}</span>
                                </div>

                                <h6 className="details-title">Descripción</h6>
                                <p className="details-description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProductos;