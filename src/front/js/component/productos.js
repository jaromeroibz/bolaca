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

    useEffect(() => {
        // Retrieve query params on each change
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get("category");

        actions.getBrands();
        actions.getCategories();

        if (category) {
            setselectedCategory(category);
            actions.getProductByCategory(category);
        } else {
            setselectedCategory(null);
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
    }, [store.products, selectedCategory, selectedAgeRange, selectedPriceRange, selectedBrand, page]);

    const loadMoreProducts = () => {
        if (loading || !hasMore) return;
        
        setLoading(true);
        // Simulate a delay to show loading state (remove in production)
        setTimeout(() => {
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        }, 500);
    };

    const [selectedCategory, setselectedCategory] = useState(null); 
    const [selectedAgeRange, setSelectedAgeRange] = useState(null); 
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);  

    const filterProductsByAgeRange = (products) => {
        if (!selectedAgeRange) return products;
        const [minAge, maxAge] = selectedAgeRange;
        return products.filter((item) => item.min_age >= minAge && item.max_age <= maxAge);
    };

    const filterProductsByPriceRange = (products) => {
        if (!selectedPriceRange) return products;
        const [minPrice, maxPrice] = selectedPriceRange;
        return products.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    };

    const filterProductsByBrand = (products) => {
        if (!selectedBrand) return products;
        return products.filter((item) => item.brand.name.toLowerCase() === selectedBrand.toLowerCase());
    };

    const filterProductsByCategory = (products) => {
        if (!selectedCategory) return products;
        return products.filter((item) => item.category_name.toLowerCase() === selectedCategory.toLowerCase());
    };

    let filteredProducts = store.products;
    if (selectedAgeRange) {
        filteredProducts = filterProductsByAgeRange(filteredProducts);
    } else if (selectedPriceRange) {
        filteredProducts = filterProductsByPriceRange(filteredProducts);
    } else if (selectedBrand) {
        filteredProducts = filterProductsByBrand(filteredProducts);
    } else if (selectedCategory) {
        filteredProducts = filterProductsByCategory(filteredProducts);
    }

    const ageRanges = [
        { label: "0-2 años", range: [0, 2] },
        { label: "3-6 años", range: [3, 6] },
        { label: "7-10 años", range: [7, 10] }
    ];

    const priceRanges = [
        { label: "$10000 - $15000", range: [10000, 15000] },
        { label: "$15001 - $25000", range: [15001, 25000] },
        { label: "$25001 - $30000", range: [25001, 30000] }
    ];

    return (
        <>
            <div className="container">
                <div className="productos">
                    <h2>Productos</h2>
                    <h6 className="py-5">{filteredProducts.length} resultados</h6>
                    <div className="row">
                        <div className="col-9">
                            <div className="cards">
                                {store.products.length === 0 ? (
                                    <p>Cargando productos...</p>
                                ) : (
                                    filteredProducts.length === 0 ? (
                                        <h1>No hay productos que coincidan con el filtro seleccionado.</h1>
                                    ) : (
                                        <>
                                            {displayedProducts.map((item) => (
                                                <div className="card" key={item.id}>
                                                    <img className="card-img-top" loading="lazy" src={item.image} alt={item.name}></img>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        {item.stock === 0 && (
                                                        <p className="text-danger fw-bold mb-2">Sin Stock</p>
                                                         )}
                                                        <p className="card-text">${item.price}</p>
                                                        <div className="d-flex">
                                                            <div>
                                                                <Link to={`/detalleproductos/${item.id}`} style={{ textDecoration: 'none' }}>
                                                                    <button className="see-more-button d-inline">Ver Más</button>
                                                                </Link>
                                                            </div>
                                                            {item.stock >= 1 ? (
                                                            <div className="px-3">
                                                                <button onClick={() => actions.addToCart(item)} className="add-cart-button">Agregar al carrito</button>
                                                            </div> ) : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            {/* Loading indicator and intersection observer target */}
                                            {hasMore && (
                                                <div ref={loadingRef} className="loading-indicator text-center my-4 w-100">
                                                    {loading ? "Cargando más productos..." : ""}
                                                </div>
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="col-3 px-5">
                            <h6>Precio</h6>
                            {priceRanges.map((range, index) => (
                                <p key={index} 
                                    onClick={() => {
                                        setSelectedPriceRange(range.range); 
                                        setSelectedAgeRange(null); 
                                        setSelectedBrand(null);
                                        setPage(1); // Reset pagination when filter changes
                                    }} 
                                    style={{ cursor: 'pointer', color: selectedPriceRange === range.range ? 'blue' : 'black' }}
                                >
                                    {range.label}
                                </p>
                            ))}
                            <hr></hr>
                            <h6>Marca</h6>
                            {store.brands.map((brand, index) => (
                                <p
                                    key={index}
                                    onClick={() => {
                                        setSelectedBrand(brand.name);
                                        setSelectedAgeRange(null);
                                        setSelectedPriceRange(null);
                                        actions.getProductsByBrands(brand.id);
                                        setPage(1); // Reset pagination when filter changes
                                    }}
                                    style={{ cursor: 'pointer', color: selectedBrand === brand ? 'blue' : 'black' }}
                                >
                                    {brand.name}
                                </p>
                            ))}
                            <hr></hr>
                            <h6>Edad mínima recomendada</h6>
                            {ageRanges.map((range, index) => (
                                <p
                                    key={index}
                                    onClick={() => {
                                        setSelectedAgeRange(range.range);
                                        setSelectedPriceRange(null);
                                        setSelectedBrand(null);
                                        setPage(1); // Reset pagination when filter changes
                                    }}
                                    style={{ cursor: 'pointer', color: selectedAgeRange === range.range ? 'blue' : 'black' }}
                                >
                                    {range.label}
                                </p>
                            ))}
                            <hr></hr>
                            <h6>Categoría</h6>
                            {store.categories.map((item, index) => (
                                <p
                                    key={index}
                                    onClick={() => {
                                        setselectedCategory(item.category_name);
                                        setSelectedAgeRange(null);
                                        setSelectedPriceRange(null);
                                        setSelectedBrand(null);
                                        actions.getProductByCategory(item.id);
                                        setPage(1); // Reset pagination when filter changes
                                    }}
                                    style={{ cursor: 'pointer', color: selectedCategory === item ? 'blue' : 'black' }}
                                >
                                    {item.category_name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productos;
