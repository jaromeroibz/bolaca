import React, { useContext } from "react";
import { Link } from "react-router-dom";
import bolacaLogo from "../../img/bolaca-sin-borde-pequeña.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	return (
		<>
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src={bolacaLogo} width={200} height={110}></img>
				</a>
				{/* Toggler Button */}
				<button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				{/* Side Bar */}
				<div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
				{/* Side Bar Header */}

				<div className="offcanvas-header border-bottom">
					<h5 className="offcanvas-title" id="offcanvasNavbarLabel">BOLACA</h5>
					<button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				{/* Sidebar Body */}
				<div className="offcanvas-body">
					<ul className="navbar-nav justify-content-center align-items-center  flex-grow-1 pe-3">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#Home">HOME</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle active px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							PRODUCTOS
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">LIBROS</a></li>
								<li><a className="dropdown-item" href="#">JUEGOS DE MESA</a></li>
								<li><a className="dropdown-item" href="#">CARTAS DIDACTICAS</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link active px-3" aria-current="page" href="#Servicios">SERVICIOS</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active px-3" aria-current="page" href="#Nosotros">NOSOTROS</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active px-3" aria-current="page" href="#Contacto">CONTACTO</a>
						</li>
					</ul>
					<form className="d-flex mt-3 my-3" role="search">
						<input className="form-control me-2 shadow-none" type="search" aria-label="Search"></input>
						<button className="btn border-0 shadow-none" type="submit">
							<i className="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
						</button>
					</form>
					<Link to="/cart" className="d-flex" style={{textDecoration: 'none'}}>
						<button className="btn border-0 shadow-none">
							<i className="fa-solid fa-cart-shopping"></i>
						</button>
						{store.cart.length ? (
							<button className="btn border-0 shadow-none">{store.cart.length}</button>
						):(
							''
						)}
					</Link>
				</div>
				</div>
			</div>
		</nav>
		</>
	);
};
