import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons'; // Importa el icono de engranaje desde react-bootstrap-icons

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="brand">
        <a href="#">Urban Elegance</a>
      </div>
      <div className="profile">
        <img src=".png" alt="Mi Foto de Perfil" />
      </div>
      <div className="help">
        <a href="#">
          <Gear /> {/* Muestra el icono de engranaje */}
        </a>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Panel de administrador</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Explorar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pedidos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Menu
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cuentas</a></li>
                  <li><a class="dropdown-item" href="#">Historial de compras</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Registro</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"></input>
              <button class="btn btn-outline-dark" type="submit">Busqueda de items</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export {Navbar};
