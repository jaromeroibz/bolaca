import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container mt-5 pt-5 pb-3">
      <div className="container">
        <div className="footer-content row justify-content-center align-items-start">
          {/* Left Section - Categories */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h4 className="mb-3 fw-bold">Categorías</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={`/productos?category=3`} className="text-decoration-none footer-link">
                  Cartas Didácticas
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/productos?category=1`} className="text-decoration-none footer-link">
                  Juegos de Mesa
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/productos?category=2`} className="text-decoration-none footer-link">
                  Libros
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Section - Logo */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <div className="footer-logo text-center">
              <img
                src="https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169831/bolaca-sin-borde-peque%C3%B1a_f7etqg.jpg"
                alt="Bolaca"
                className="img-fluid footer-logo-img"
                style={{ maxWidth: '150px', borderRadius: '10px' }}
              />
              <div className="mt-3 logo-text">
                <h3 className="mb-0 fw-bold">Bolaca</h3>
                <p className="text-muted small">Juegos Didácticos</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="col-md-4 text-center text-md-end">
            <h4 className="mb-3 fw-bold">Contáctate con nosotros</h4>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex justify-content-md-end align-items-center">
                <span className="me-2">bolaca</span>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li className="mb-2 d-flex justify-content-md-end align-items-center">
                <span className="me-2">@bolacachile</span>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="mb-2 d-flex justify-content-md-end align-items-center">
                <span className="me-2">+56 9 3240 8221</span>
                <i className="fa-solid fa-phone"></i>
              </li>
              <li className="mb-2 d-flex justify-content-md-end align-items-center">
                <span className="me-2">bolacachile@gmail.com</span>
                <i className="fa-solid fa-envelope"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Section */}
        <div className="footer-bottom text-center">
          <p className="mb-0 text-muted">
            © {new Date().getFullYear()} Bolaca. Todos los derechos reservados.
          </p>
          <p className="small text-muted mt-1">Developed by SunlightDev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
