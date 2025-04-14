import React, { useEffect, useContext, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../store/appContext.js";

const Productos = () => {
    const { store, actions } = useContext(AppContext);
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const productsPerPage = 6;
    const [showFilters, setShowFilters] = useState(false);

    // Scroll to top when component mounts or route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const observer = useRef();

    const loadingRef = useCallback(
        (node) => {
            if (loading || !hasMore) return; // Prevent triggering when loading or no more products available
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreProducts(); // Trigger loading more products
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const [activeFilter, setActiveFilter] = useState({
        type: null, // 'category', 'age', 'price', or 'brand'
        value: null,
    });

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryId = searchParams.get("category");

        actions.getBrands();
        actions.getCategories();

        if (categoryId) {
            const categoryName = store.categories.find(
                (cat) => cat.id === parseInt(categoryId)
            )?.category_name;

            if (categoryName) {
                setActiveFilter({
                    type: "category",
                    value: categoryName,
                });
                actions.getProductByCategory(categoryId);
            } else {
                console.error(`Category with ID ${categoryId} not found.`);
            }
        } else {
            setActiveFilter({
                type: null,
                value: null,
            });
            actions.getProducts();
        }

        // Reset pagination when filters change
        setPage(1);
        setHasMore(true);
    }, [location.search, store.categories]);

    useEffect(() => {
        if (store.products.length === 0 || filteredProducts.length === 0) {
            setDisplayedProducts([]);
            setHasMore(false);
            return;
        }

        const newDisplayedProducts = filteredProducts.slice(
            0,
            page * productsPerPage
        );
        setDisplayedProducts(newDisplayedProducts);
        setHasMore(filteredProducts.length > newDisplayedProducts.length);
    }, [store.products, filteredProducts, page]);

    const loadMoreProducts = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
        }, 500); // Simulated delay
    }, [loading, hasMore]);

    const filterProducts = (products) => {
        if (!activeFilter.type || !activeFilter.value) return products;

        switch (activeFilter.type) {
            case "age":
                const [minAge, maxAge] = activeFilter.value;
                return products.filter(
                    (item) => item.min_age >= minAge && item.max_age <= maxAge
                );

            case "price":
                const [minPrice, maxPrice] = activeFilter.value;
                return products.filter(
                    (item) => item.price >= minPrice && item.price <= maxPrice
                );

            case "brand":
                return products.filter(
                    (item) =>
                        item.brand.name.toLowerCase() ===
                        activeFilter.value.toLowerCase()
                );

            case "category":
                return products.filter(
                    (item) =>
                        item.category_name.toLowerCase() ===
                        activeFilter.value.toLowerCase()
                );

            default:
                return products;
        }
    };

    const filteredProducts = filterProducts(store.products);

    const ageRanges = [
        { label: "0-2 años", range: [0, 2] },
        { label: "3-6 años", range: [3, 6] },
        { label: "7-10 años", range: [7, 10] },
    ];

    const priceRanges = [
        { label: "$0 - $10000", range: [0, 10000] },
        { label: "$10001 - $20000", range: [10001, 20000] },
        { label: "$20001 - $25000", range: [20001, 25000] },
    ];

    const isFilterActive = (type, value) => {
        return (
            activeFilter.type === type &&
            (Array.isArray(activeFilter.value) && Array.isArray(value)
                ? activeFilter.value[0] === value[0] &&
                  activeFilter.value[1] === value[1]
                : activeFilter.value === value)
        );
    };

    const handleFilterClick = (type, value, apiCallFn = null) => {
        if (isFilterActive(type, value)) {
            setActiveFilter({ type: null, value: null });
            actions.getProducts(); // Reset to all products
        } else {
            setActiveFilter({ type, value });
            if (apiCallFn) {
                apiCallFn();
            }
        }

        setPage(1);
        if (window.innerWidth < 768) {
            setShowFilters(false);
        }
    };

    const renderFilterSidebar = () => {
        return (
            <div
                className={`${
                    window.innerWidth < 768
                        ? "filter-sidebar-mobile" + (showFilters ? " show" : "")
                        : "col-md-4 col-lg-3 px-4"
                }`}
                style={{ minWidth: "200px" }}
            >
                <div className="filter-section">
                    <h6 className="mb-2">Precio</h6>
                    <div className="ps-2">
                        {priceRanges.map((range, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleFilterClick("price", range.range)
                                }
                                className={`filter-option ${
                                    isFilterActive("price", range.range)
                                        ? "active"
                                        : ""
                                }`}
                                style={{ whiteSpace: "normal", width: "100%" }}
                            >
                                {range.label}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-3" />

                <div className="filter-section">
                    <h6 className="mb-2">Marca</h6>
                    <div className="ps-2">
                        {store.brands.map((brand, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleFilterClick(
                                        "brand",
                                        brand.name,
                                        () =>
                                            actions.getProductsByBrands(
                                                brand.id
                                            )
                                    )
                                }
                                className={`filter-option ${
                                    isFilterActive("brand", brand.name)
                                        ? "active"
                                        : ""
                                }`}
                                style={{ whiteSpace: "normal", width: "100%" }}
                            >
                                {brand.name}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-3" />

                <div className="filter-section">
                    <h6 className="mb-2">Edad mínima recomendada</h6>
                    <div className="ps-2">
                        {ageRanges.map((range, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleFilterClick("age", range.range)
                                }
                                className={`filter-option ${
                                    isFilterActive("age", range.range)
                                        ? "active"
                                        : ""
                                }`}
                                style={{ whiteSpace: "normal", width: "100%" }}
                            >
                                {range.label}
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-3" />

                <div className="filter-section">
                    <h6 className="mb-2">Categoría</h6>
                    <div className="ps-2">
                        {store.categories.map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleFilterClick(
                                        "category",
                                        item.category_name,
                                        () =>
                                            actions.getProductByCategory(
                                                item.id
                                            )
                                    )
                                }
                                className={`filter-option ${
                                    isFilterActive(
                                        "category",
                                        item.category_name
                                    )
                                        ? "active"
                                        : ""
                                }`}
                                style={{ whiteSpace: "normal", width: "100%" }}
                            >
                                {item.category_name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <div className="productos">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Productos</h2>
                        <div className="d-md-none">
                            <button
                                className="btn btn-sm btn-outline-dark"
                                onClick={() => setShowFilters(true)}
                            >
                                Filtros
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-none d-md-block col-md-4 col-lg-3">
                            {renderFilterSidebar()}
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="product-grid">
                                {displayedProducts.map((item) => (
                                    <div
                                        className="card product-card"
                                        key={item.id}
                                    >
                                        <img
                                            className="card-img-top product-card-image"
                                            loading="lazy"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <div className="card-body product-card-body">
                                            <h5 className="card-title product-card-title">
                                                {item.name}
                                            </h5>
                                            {item.stock === 0 && (
                                                <p className="text-danger fw-bold mb-2">
                                                    Sin Stock
                                                </p>
                                            )}
                                            <p className="card-text fw-bold mb-3">
                                                ${item.price.toLocaleString()}
                                            </p>
                                            <div className="d-flex flex-column flex-sm-row gap-2 product-card-actions">
                                                <Link
                                                    to={`/detalleproductos/${item.id}`}
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                    className="flex-grow-1"
                                                >
                                                    <button className="see-more-button w-100">
                                                        Ver Más
                                                    </button>
                                                </Link>
                                                {item.stock >= 1 && (
                                                    <button
                                                        onClick={() =>
                                                            actions.addToCart(
                                                                item
                                                            )
                                                        }
                                                        className="add-cart-button flex-grow-1"
                                                    >
                                                        Agregar
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {hasMore && (
                                    <div
                                        ref={loadingRef}
                                        className="loading-indicator"
                                    >
                                        {loading ? (
                                            <div className="spinner-border spinner-border-sm text-primary">
                                                <span className="visually-hidden">
                                                    Cargando...
                                                </span>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productos;