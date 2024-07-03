import React from "react";
import { Link } from "react-router-dom";
import bolacaLogo from "../../img/bolaca-sin-borde.jpg";

export const Navbar = () => {
	return (
		<>
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand mb-0 h1" href="#">
					<img className="d-inline-block" src={bolacaLogo} width={200} height={200}></img>
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav px-5">
						<ul className="navbar-nav px-5">
							<li className="nav-item active px-3">
							<a className="nav-link" href="#">Home</a>
							</li>
							<li className="nav-item dropdown px-3">
							<a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown_item" href="#">Libros </a></li>
								<li><a className="dropdown_item" href="#">Juegos de mesa </a></li>
								<li><a className="dropdown_item" href="#">Cartas didacticas </a></li>
							</ul>
							</li>
							<li className="nav-item active px-3">
							<a className="nav-link" href="#">Servicios</a>
							</li>
							<li className="nav-item active px-3">
							<a className="nav-link" href="#">Nosotros</a>
							</li>
							<li className="nav-item active px-3">
							<a className="nav-link" href="#">Contacto</a>
							</li>
						</ul>
						<span></span>
					</div>
				</div>
			</nav>
		</div>
		</>
	);
};
