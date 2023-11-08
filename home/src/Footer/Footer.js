import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Contacto</h4>
                        <p>Dirección: Calle Principal, Ciudad</p>
                        <p>Email: info@example.com</p>
                        <p>Teléfono: (123) 456-7890</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Síguenos</h4>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Idioma</h4>
                        <ul className="language">
                            <li><a href="#">Español</a></li>
                            <li><a href="#">English</a></li>
                            <li><a href="#">Français</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;