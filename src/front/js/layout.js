import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import { BackendURL } from "./component/backendURL.js";
import ErrorBoundary from './component/errorBoundary.js'; // Import the ErrorBoundary component


import { Demo } from "./pages/demo.js";
import { Single } from "./pages/single.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import LandingPage from "./component/landingPage.js";
import { Productos } from "./component/productos.js";
import { DetalleProductos } from "./component/detalleProducto.js";
import { ShoppingCart } from "./component/shoppingCart.js";
import {ContactForm} from "./component/contacto.js"
import {Success} from "./component/success.js"
import {SearchBarResults} from "./component/searchBarResults.js"
import { LogIn } from "./component/login.js";
import { LogOut } from "./component/logout.js";
import { Creadores } from "./component/creadores.js"


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                    <Route
                    element={
                        <ErrorBoundary>
                            <LandingPage />
                        </ErrorBoundary>
                    }
                    path="/"
                />
                        <Route element={<Productos />} path="/productos"/>
                        <Route element={<DetalleProductos />} path="/detalleproductos/:theid" />                                             
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<ShoppingCart />} path="/cart"/>
                        <Route element={<ContactForm />} path="/contacto"/>
                        <Route element={<Success />} path="/success"/>
                        <Route element={<SearchBarResults />} path="/searchbarresults"/>
                        <Route element={<LogIn />} path="/login"/>
                        <Route element={<LogOut />} path="/logout"/>
                        <Route element={<Creadores />} path="/creadores"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
