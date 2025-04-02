import React, { useEffect, useContext, useState, useRef, useCallback } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AppContext } from "../store/appContext.js";

const Productos = () => {
    const { store, actions } = useContext(AppContext);
    const location = useLocation();
    const [page, setPage] = useState(1);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const productsPerPage = 6;
    const [showFilters, setShowFilters] = useState(false); // For mobile filter toggle
    
    // Create a ref for the loading element
    const observer = useRef();
    const loadingRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMoreProducts();
            }
        });
        
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    // Filter states combined into a single state object
    const [activeFilter, setActiveFilter] = useState({
        type: null, // 'category', 'age', 'price', or 'brand'
        value: null
    });

    useEffect(() => {
        // Retrieve query params on each change
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");

        actions.getBrands();
        actions.getCategories();

        if (category) {
            setActiveFilter({
                type: 'category',
                value: category
            });
            actions.getProductByCategory(category);
        } else {
            setActiveFilter({
                type: null,
                value: null
            });
            actions.getProducts();
        }
        
        // Reset pagination when filters change
        setPage(1);
        setHasMore(true);
    }, [location.search]);
    
    // Update displayed products when store.products changes or filters change
    useEffect(() => {
        if (filteredProducts.length > 0) {
            setDisplayedProducts(filteredProducts.slice(0, page * productsPerPage));
            setHasMore(filteredProducts.length > page * productsPerPage);
        } else {
            setDisplayedProducts([]);
            setHasMore(false);
        }
    }, [store.products, activeFilter, page]);

    const loadMoreProducts = () => {
        if (loading || !hasMore) return;
        
        setLoading(true);
        // Simulate a delay to show loading state (remove in production)
        setTimeout(() => {
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        }, 500);
    };

    // Filter functions
    const filterProducts = (products) => {
        if (!activeFilter.type || !activeFilter.value) return products;

        switch (activeFilter.type) {
            case 'age':
                const [minAge, maxAge] = activeFilter.value;
                return products.filter((item) => item.min_age >= minAge && item.max_age <= maxAge);
            
            case 'price':
                const [minPrice, maxPrice] = activeFilter.value;
                return products.filter((item) => item.price >= minPrice && item.price <= maxPrice);
            
            case 'brand':
                return products.filter((item) => 
                    item.brand.name.toLowerCase() === activeFilter.value.toLowerCase()
                );
            
            case 'category':
                return products.filter((item) => 
                    item.category_name.toLowerCase() === activeFilter.value.toLowerCase()
                );
            
            default:
                return products;
        }
    };

    // Apply the active filter to products
    const filteredProducts = filterProducts(store.products);

    // Filter option data
    const ageRanges = [
        { label: "0-2 años", range: [0, 2] },
        { label: "3-6 años", range: [3, 6] },
        { label: "7-10 años", range: [7, 10] }
    ];

    const priceRanges = [
        { label: "$0 - $10000", range: [0, 10000] },
        { label: "$10001 - $20000", range: [10001, 20000] },
        { label: "$20001 - $25000", range: [20001, 25000] }
    ];

    // Helper function to check if a filter is active
    const isFilterActive = (type, value) => {
        return activeFilter.type === type && 
               (Array.isArray(activeFilter.value) && Array.isArray(value) 
                ? activeFilter.value[0] === value[0] && activeFilter.value[1] === value[1]
                : activeFilter.value === value);
    };

    // Handler for filter clicks
    const handleFilterClick = (type, value, apiCallFn = null) => {
        // If clicking the same filter that's already active, clear it
        if (isFilterActive(type, value)) {
            setActiveFilter({ type: null, value: null });
            actions.getProducts(); // Reset to all products
        } else {
            // Set new active filter and clear others
            setActiveFilter({ type, value });
            
            // If there's an API call associated with this filter, make it
            if (apiCallFn) {
                apiCallFn();
            }
        }
        
        // Reset pagination
        setPage(1);
        
        // On mobile, close the filter sidebar after selection
        if (window.innerWidth < 768) {
            setShowFilters(false);
        }
    };

    // Render the filter sidebar
    const renderFilterSidebar = () => {
        return (
            <div className={window.innerWidth < 768 ? "filter-sidebar-mobile" + (showFilters ? " show" : "") : "col-md-4 col-lg-3 px-4"}>
                
                {window.innerWidth < 768 && (
                    <button 
                        className="close-filters-btn"
                        onClick={() => setShowFilters(false)}
                        aria-label="Close filters"
                    >
                        ×
                    </button>
                )}
                
                <div className="filter-section">
                    <h5 className="mb-3">Filtros</h5>
                    
                    {/* Active filter indicator */}
                    {activeFilter.type && (
                        <div className="mb-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <small className="text-muted">Filtro activo:</small>
                                <button 
                                    className="btn btn-sm btn-outline-secondary filter-clear-btn"
                                    onClick={() => {
                                        setActiveFilter({ type: null, value: null });
                                        actions.getProducts();
                                        setPage(1);
                                    }}
                                >
                                    Limpiar
                                </button>
                            </div>
                            <div className="mt-2">
                                {activeFilter.type === 'price' && (
                                    <span className="active-filter-badge">
                                        Precio: ${activeFilter.value[0]} - ${activeFilter.value[1]}
                                    </span>
                                )}
                                {activeFilter.type === 'brand' && (
                                    <span className="active-filter-badge">
                                        Marca: {activeFilter.value}
                                    </span>
                                )}
                                {activeFilter.type === 'age' && (
                                    <span className="active-filter-badge">
                                        Edad: {activeFilter.value[0]}-{activeFilter.value[1]} años
                                    </span>
                                )}
                                {activeFilter.type === 'category' && (
                                    <span className="active-filter-badge">
                                        Categoría: {activeFilter.value}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="filter-section">
                    <h6 className="mb-2">Precio</h6>
                    <div className="ps-2">
                        {priceRanges.map((range, index) => (
                            <div 
                                key={index} 
                                onClick={() => handleFilterClick('price', range.range)}
                                className={`filter-option ${isFilterActive('price', range.range) ? 'active' : ''}`}
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                                onClick={() => handleFilterClick(
                                    'brand', 
                                    brand.name, 
                                    () => actions.getProductsByBrands(brand.id)
                                )}
                                className={`filter-option ${isFilterActive('brand', brand.name) ? 'active' : ''}`}
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                                onClick={() => handleFilterClick('age', range.range)}
                                className={`filter-option ${isFilterActive('age', range.range) ? 'active' : ''}`}
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                                onClick={() => handleFilterClick(
                                    'category', 
                                    item.category_name, 
                                    () => actions.getProductByCategory(item.id)
                                )}
                                className={`filter-option ${isFilterActive('category', item.category_name) ? 'active' : ''}`}
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h6 className="m-0">{filteredProducts.length} resultados</h6>
                        {activeFilter.type && (
                            <div className="d-none d-md-block">
                                <button 
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() => {
                                        setActiveFilter({ type: null, value: null });
                                        actions.getProducts();
                                        setPage(1);
                                    }}
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div className="row">
                        {/* Filter sidebar for desktop */}
                        <div className="d-none d-md-block col-md-4 col-lg-3">
                            {renderFilterSidebar()}
                        </div>
                        
                        {/* Product grid */}
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="product-grid">
                                {store.products.length === 0 ? (
                                    <div className="text-center py-5">
                                        <p>Cargando productos...</p>
                                    </div>
                                ) : (
                                    filteredProducts.length === 0 ? (
                                        <div className="empty-state">
                                            <h5>No hay productos que coincidan con el filtro seleccionado.</h5>
                                            <button 
                                                className="btn btn-outline-primary mt-3"
                                                onClick={() => {
                                                    setActiveFilter({ type: null, value: null });
                                                    actions.getProducts();
                                                }}
                                            >
                                                Ver todos los productos
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            {displayedProducts.map((item) => (
                                                <div className="card product-card" key={item.id}>
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
                                                            <p className="text-danger fw-bold mb-2">Sin Stock</p>
                                                        )}
                                                        
                                                        <p className="card-text fw-bold mb-3">${item.price.toLocaleString()}</p>
                                                        
                                                        <div className="d-flex flex-column flex-sm-row gap-2 product-card-actions">
                                                            <Link 
                                                                to={`/detalleproductos/${item.id}`} 
                                                                style={{ textDecoration: 'none' }}
                                                                className="flex-grow-1"
                                                            >
                                                                <button className="see-more-button w-100">Ver Más</button>
                                                            </Link>
                                                            
                                                            {item.stock >= 1 && (
                                                                <button 
                                                                    onClick={() => actions.addToCart(item)} 
                                                                    className="add-cart-button flex-grow-1"
                                                                >
                                                                    Agregar
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            {/* Loading indicator and intersection observer target */}
                                            {hasMore && (
                                                <div ref={loadingRef} className="loading-indicator">
                                                    {loading ? (
                                                        <div className="spinner-border spinner-border-sm text-primary" role="status">
                                                            <span className="visually-hidden">Cargando...</span>
                                                        </div>
                                                    ) : ""}
                                                </div>
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile filter sidebar and overlay */}
            {window.innerWidth < 768 && (
                <>
                    <div className={`filter-overlay${showFilters ? " show" : ""}`} onClick={() => setShowFilters(false)}></div>
                    {renderFilterSidebar()}
                    
                    {/* Mobile filter toggle button */}
                    {!showFilters && (
                        <button 
                            className="filter-toggle-btn"
                            onClick={() => setShowFilters(true)}
                            aria-label="Show filters"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                    )}
                </>
            )}
        </>
    );
};

export default Productos;
