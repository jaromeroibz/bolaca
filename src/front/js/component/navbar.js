import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bolacaLogo from "../../img/bolaca-sin-borde-pequeña.jpg";
import { AppContext } from "../store/appContext.js";

const Navbar = () => {
    const { store, actions } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle search functionality
    const handleSearch = (e) => {
        e.preventDefault();
        actions.filterProducts(searchQuery);
        navigate("/searchbarresults");
        
        // Close mobile menu after search on small screens
        const offcanvas = document.getElementById('offcanvasNavbar');
        if (offcanvas && window.innerWidth < 992) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            if (bsOffcanvas) bsOffcanvas.hide();
        }
    };
    
    // Toggle mobile menu
    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };
    
    // Close mobile menu when a link is clicked
    const closeMenu = () => {
        if (window.innerWidth < 992) {
            const offcanvas = document.getElementById('offcanvasNavbar');
            if (offcanvas) {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
            setIsExpanded(false);
        }
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container-fluid px-2 px-md-4 px-lg-5">
                    {/* Logo - Responsive sizing */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src={bolacaLogo} 
                            className="img-fluid" 
                            alt="Logo" 
                            style={{
                                maxWidth: isScrolled ? "120px" : "150px",
                                transition: "max-width 0.3s ease",
                            }}
                        />
                    </Link>
                    
                    {/* Cart icon visible on all screen sizes */}
                    <div className="d-flex align-items-center order-lg-last me-2 me-lg-0">
                        <Link to="/cart" className="nav-cart-link me-3 me-lg-0">
                            <div className="position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {store.cart.length > 0 && (
                                    <span className="cart-badge">{store.cart.length}</span>
                                )}
                            </div>
                        </Link>
                        
                        {/* Toggler Button */}
                        <button 
                            className="navbar-toggler shadow-none border-0" 
                            type="button" 
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasNavbar" 
                            aria-controls="offcanvasNavbar" 
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    
                    {/* Sidebar / Expanded Menu */}
                    <div 
                        className="sidebar offcanvas offcanvas-start" 
                        tabIndex="-1" 
                        id="offcanvasNavbar" 
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        {/* Sidebar Header - Mobile only */}
                        <div className="offcanvas-header border-bottom d-lg-none">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BOLACA</h5>
                            <button 
                                type="button" 
                                className="btn-close shadow-none" 
                                data-bs-dismiss="offcanvas" 
                                aria-label="Close"
                                onClick={toggleMenu}
                            ></button>
                        </div>
                        
                        {/* Navbar Content */}
                        <div className="offcanvas-body align-items-center">
                            {/* Navigation Links */}
                            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                                <li className="nav-item px-1 px-lg-3">
                                    <Link 
                                        to="/" 
                                        className="nav-link" 
                                        onClick={closeMenu}
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item px-1 px-lg-3">
                                    <Link 
                                        to="/productos" 
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        PRODUCTOS
                                    </Link>
                                </li>
                                <li className="nav-item px-1 px-lg-3">
                                    <Link 
                                        to="/creadores" 
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        CREADORES
                                    </Link>
                                </li>
                                <li className="nav-item px-1 px-lg-3">
                                    <Link 
                                        to="/contacto" 
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        CONTACTO
                                    </Link>
                                </li>
                                <li className="nav-item px-1 px-lg-3">
                                    <Link 
                                        to="/login" 
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        LOGIN
                                    </Link>
                                </li>
                            </ul>
                            
                            {/* Search Form */}
                            <form 
                                className="d-flex mt-3 my-lg-0 search-form" 
                                role="search" 
                                onSubmit={handleSearch}
                            >
                                <div className="input-group">
                                    <input 
                                        className="form-control shadow-none search-input" 
                                        type="search" 
                                        value={searchQuery} 
                                        onChange={(e) => setSearchQuery(e.target.value)} 
                                        aria-label="Search" 
                                        placeholder="NOMBRE, CATEGORÍA O MARCA" 
                                    />
                                    <button className="btn search-btn" type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </form>
                            
                            {/* Cart icon - Only visible in mobile sidebar */}
                            <div className="d-lg-none mt-3">
                                <Link 
                                    to="/cart" 
                                    className="mobile-cart-link d-flex align-items-center"
                                    onClick={closeMenu}
                                >
                                    <i className="fa-solid fa-cart-shopping me-2"></i>
                                    <span>Carrito {store.cart.length > 0 ? `(${store.cart.length})` : ""}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
