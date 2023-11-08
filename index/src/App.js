import React from 'react';
import './App.css';
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  return (
    <div>
     <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Frequently asked questions</a></li>
                    <li><a className="dropdown-item" href="#">Order status</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Contact us</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>

              <a className="navbar-brand" href="#">Urban Elegance</a>

              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i>
              </a>            
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* <!--        Section 1--> */}
        <section class="hero">
            <div class="hero-content">
                <h1 id="Alineamientoh1">Welcome to our online store!</h1>
                <p id="alineamientoP">Discover the latest trends in fashion.</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="button">Shop now</button>
                </div>
            </div>
        </section>

        {/* <!--        Section 2--> */}
           
        <section className="featured-products">
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://chevignon.vtexassets.com/arquivos/ids/1326789-500-auto?v=1781796593&width=500&height=auto&aspect=true" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Men's Polo Shirt, Classic Fit Short Sleeve - Stripes</h5>
                  <p className="card-text">$74.950</p>
                  <button type="button" className="btn btn-primary btn-sm">Buy now</button>
                  <button type="button" className="btn btn-secondary btn-sm">Dimiss</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://chevignon.vtexassets.com/arquivos/ids/1367873-500-auto?v=1781729778&width=500&height=auto&aspect=true" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Men's Polo Shirt, Slim Fit Short Sleeve - Color Blocks and Bias</h5>
                  <p className="card-text">$169.900</p>
                  <button type="button" className="btn btn-primary btn-sm">Buy now</button>
                  <button type="button" className="btn btn-secondary btn-sm">Dimiss</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://chevignon.vtexassets.com/arquivos/ids/1369414-500-auto?v=1781892819&width=500&height=auto&aspect=true" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Men's Polo Shirt, Classic Fit Short Sleeve - Contrast Fabrics</h5>
                  <p className="card-text">$149.900</p>
                  <button type="button" className="btn btn-primary btn-sm">Buy now</button>
                  <button type="button" className="btn btn-secondary btn-sm">Dimiss</button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!--        Section 3 Boletin--> */}
        <section class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Subscribe to our newsletter</h2>
                        <p>Receive updates on our products and special offers directly to your inbox.</p>
                    </div>
                    <div class="col-md-6">
                        <form id="newsletter-form">
                            <input type="email" class="form-control" placeholder="E-mail" required></input>
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-3">
                  <h4>Contacto</h4>
                  <p>Dirección: Calle Principal, Ciudad</p>
                  <p>Email: info@example.com</p>
                  <p>Teléfono: (123) 456-7890</p>
              </div>
              <div class="col-md-3">
                  <h4>Enlaces Rápidos</h4>
                  <ul>
                      <li><a href="#">Inicio</a></li>
                      <li><a href="#">Productos</a></li>
                      <li><a href="#">Contacto</a></li>
                  </ul>
              </div>
              <div class="col-md-3">
                  <h4>Síguenos</h4>
                  <ul class="social-icons">
                      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  </ul>
              </div>

              <div class="col-md-3">
                  <h4>Idioma</h4>
                  <ul class="language">
                      <li><a href="#">Español</a></li>
                      <li><a href="#">English</a></li>
                      <li><a href="#">Français</a></li>
                  </ul>
              </div>
          </div>
      </div>
      </footer>
    </div>
  );
}

export default App;

