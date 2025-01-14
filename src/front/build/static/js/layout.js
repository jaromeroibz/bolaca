import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AdminPage } from "./component/adminPage";
import { AdminSignUp } from "./component/adminSignUp";
import { LandingPage } from "./component/landingPage";
import { Productos } from "./component/productos";
import { DetalleProductos } from "./component/detalleProducto";
import { ShoppingCart } from "./component/shoppingCart";
import {ContactForm} from "./component/contacto"
import {Success} from "./component/success"
import {SearchBarResults} from "./component/searchBarResults"
import { LogIn } from "./component/login";
import { LogOut } from "./component/logout";
import { Creadores } from "./component/creadores"




import { Header } from "./component/header";


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
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<Productos />} path="/productos"/>
                        <Route element={<DetalleProductos />} path="/detalleproductos/:theid" />                                             
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<adminPage />} path="/single/:theid" />
                        <Route element={<ShoppingCart />} path="/cart"/>
                        <Route element={<ContactForm />} path="/contacto"/>
                        <Route element={<Success />} path="/success"/>
                        <Route element={<SearchBarResults />} path="/searchbarresults"/>
                        <Route element={<LogIn />} path="/login"/>
                        <Route element={<LogOut />} path="/logout"/>
                        <Route element={<AdminPage />} path="/admin"/>
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
