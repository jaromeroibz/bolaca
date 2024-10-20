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
					<p><a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="fa-solid fa-phone"></a></p>
					<p><a href="https://api.whatsapp.com/send/?phone=56932408221&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="fa-brands fa-whatsapp"></a></p>
					<p><a href="https://www.instagram.com/bolacachile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="fa-brands fa-instagram"></a></p>
					<p><a href="https://www.facebook.com/profile.php?id=61557448063109&locale=es_LA" target="_blank" rel="noopener noreferrer" className="fa-brands fa-facebook"></a></p>
				</div>
				<div className="col-3"></div>
			</div>
			<div className="row text-center">
			<p>Developed by Javier Romero</p>
			</div>
		</div>
	</footer>
);
