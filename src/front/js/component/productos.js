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

    // Track the IntersectionObserver instance
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
        [loading, hasMore] // Dependencies
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
                {/* Add filters here */}
            </div>
        );
    };

    return (
        <>
            <div className="container">
                <div className="productos">
                    <h2>Productos</h2>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="product-grid">
                                {displayedProducts.map((item) => (
                                    <div
                                        className="card product-card"
                                        key={item.id}
                                    >
                                        <div>{item.name}</div>
                                    </div>
                                ))}
                                {hasMore && (
                                    <div ref={loadingRef} className="loading">
                                        {loading && <div>Loading...</div>}
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