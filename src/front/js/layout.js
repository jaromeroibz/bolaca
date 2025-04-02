import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// Direct imports for components
import BackendURL from "./component/backendURL.js";
import { AppContextProvider } from "./store/appContext.js";
import Navbar from "./component/navbar.js";
import Footer from "./component/footer.js";
import LandingPage from "./component/landingPage.js";
import Productos from "./component/productos.js";
import DetalleProductos from "./component/detalleProducto.js";
import ShoppingCart from "./component/shoppingCart.js";
import ContactForm from "./component/contacto.js";
import Success from "./component/success.js";
import SearchBarResults from "./component/searchBarResults.js";
import LogIn from "./component/login.js";
import LogOut from "./component/logout.js";
import Creadores from "./component/creadores.js";
import ErrorBoundary from "./component/errorBoundary.js";
import ScrollToTop from "./component/scrollToTop.js";

// Loading component
const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

// Create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    // Render BackendURL if BACKEND_URL is missing
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") {
        return <BackendURL />;
    }

    return (
        <ErrorBoundary>
            <AppContextProvider>
                <GoogleReCaptchaProvider reCaptchaKey="6Ldl6v8qAAAAADN4R2hbNfeBQdSnpFiQHx7PHscx">
                    <Suspense fallback={<LoadingSpinner />}>
                        <BrowserRouter basename={basename}>
                        <ScrollToTop />
                            <Navbar />
                            <Routes>
                                <Route element={<LandingPage />} path="/" />
                                <Route element={<Productos />} path="/productos" />
                                <Route element={<DetalleProductos />} path="/detalleproductos/:theid" />
                                <Route element={<ShoppingCart />} path="/cart" />
                                <Route element={<ContactForm />} path="/contacto" />
                                <Route element={<Success />} path="/success" />
                                <Route element={<SearchBarResults />} path="/searchbarresults" />
                                <Route element={<LogIn />} path="/login" />
                                <Route element={<LogOut />} path="/logout" />
                                <Route element={<Creadores />} path="/creadores" />
                                <Route path="*" element={
                                    <div className="container text-center mt-5">
                                        <h1>404 - Page Not Found!</h1>
                                        <p>The page you're looking for doesn't exist.</p>
                                    </div>
                                } />
                            </Routes>
                            <Footer />
                        </BrowserRouter>
                    </Suspense>
                </GoogleReCaptchaProvider>
            </AppContextProvider>
        </ErrorBoundary>
    );
};

export default Layout;
