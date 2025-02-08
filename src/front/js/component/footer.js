import React from "react";
import { Link } from "react-router-dom";
import bolacaLogo from "../../img/bolaca-sin-borde-pequeña.jpg";

const Footer = () => {
  return (
    <div className="py-5">
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Section - Categories */}
          <div className="footer-section categories">
            <h3>Categorías</h3>
            <ul>
              <li><Link to={`/productos?category=Cartas Didacticas`} style={{ textDecoration: 'none' }}>Cartas Didácticas</Link></li>
              <li><Link to={`/productos?category=Test`} style={{ textDecoration: 'none' }}>Juegos de Mesa</Link></li>
              <li><Link to={`/productos?category=Libros Moviles`} style={{ textDecoration: 'none' }}>Libros Móviles</Link></li>
            </ul>
          </div>

          {/* Center Section - Logo */}
          <div className="footer-logo">
            <img
              src={bolacaLogo} // Replace with your logo URL
              alt="Bolaca"
            />
          </div>

          {/* Right Section - Contact */}
          <div className="footer-section contact">
            <h3>Contactate con nosotros</h3>
            <ul>
              <li>bolaca <i class="fa-brands fa-facebook"></i></li>
              <li>@bolacachile <i class="fa-brands fa-instagram"></i></li>
              <li>+56 9 3240 8221 <i class="fa-solid fa-phone"></i></li>
              <li>bolacachile@gmail.com <i class="fa-solid fa-envelope"></i></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>Developed by SunlightDev</p>
          {/* <p>Privacidad | Powered by Mercado Shops</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
