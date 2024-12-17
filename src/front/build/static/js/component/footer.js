import React from "react";
import bolacaLogo from "../../img/bolaca-sin-borde-pequeña.jpg";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Categories */}
        <div className="footer-section categories">
          <h3>Categorías</h3>
          <ul>
            <li>Cartas Didácticas</li>
            <li>Juegos de Mesa</li>
            <li>Libros Móviles</li>
            <li>Rompecabezas</li>
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
            <li>barcodepapeldidacticos 📘</li>
            <li>@barcodepapeldidacticos 📷</li>
            <li>(+54) 11 5175-1717 📱</li>
            <li>contacto@barcodepapel.com.ar 📧</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Developed by GALARRETA®</p>
        <p>Privacidad | Powered by Mercado Shops</p>
      </div>
    </footer>
  );
};

