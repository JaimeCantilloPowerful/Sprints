import React from 'react';
import Navbar from './Navbar/Navbar';
import ProductList from './ProductList/ProductList';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './stylesHome.css'
import Productos from './ProductList/ProductList';


const App = () => {
    return (
        <div>
            <Navbar />
            <Productos />
            <Footer />
        </div>
    );
}

export default App;
