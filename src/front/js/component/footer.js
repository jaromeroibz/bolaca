import React, { Component } from "react";
import { Link } from "react-router-dom";
import bolacaLogo from "../../img/bolaca-sin-borde-pequeña.jpg";


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="footer-body py-5">
			<div className="row text-center">
				<div className="col-3"></div>
				<div className="col-2">
					<h3>Categorías</h3>
					<p>Cartas didáxcticas</p>
					<p>Juegos de mesa</p>
				</div>
				<div className="col-2">
					<Link to="/" style={{textDecoration: 'none' }}> 
						<img src={bolacaLogo} width={200} height={110}></img>
					</Link>
				</div>
				<div className="col-2">
					<h3>Contactate con nosotros</h3>
					<p>Telefono: </p>
					<p>Correo:</p>
					<p>Instagram:</p>
					<p>Facebook:</p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row text-center">
			<p>Developed by Javier Romero</p>
			</div>
		</div>
	</footer>
);
