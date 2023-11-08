import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navA">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Men</a></li>
                                <li><a className="dropdown-item" href="#">Woman</a></li>
                                <li><a className="dropdown-item" href="#">Kid</a></li>
                            </ul>
                        </li>
                    </ul>

                <div class="navbar-collapse justify-content-center">
                  <a class="navbar-brand" href="#">Urban Elegance - Home</a>
                </div>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" style={{ color: 'black' }} href="#"><i className="fas fa-user"></i></a></li>
                        <li className="nav-item"><a className="nav-link" style={{ color: 'black' }} href="#" id="carrito"><i className="fas fa-shopping-cart"></i></a></li>
                        <li className="nav-item"><a className="nav-link" style={{ color: 'black' }} href="#"><i className="fas fa-history"></i></a></li>
                        <li className="nav-item"><a className="nav-link" style={{ color: 'black' }} href="#"><i className="fas fa-cogs"></i></a></li>
                        <li className="nav-item"><a className="nav-link" style={{ color: 'black' }} href="#"><i className="fas fa-sign-out-alt"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
