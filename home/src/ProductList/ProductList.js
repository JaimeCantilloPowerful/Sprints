import productos from './productos'; // Asegúrate de proporcionar la ruta correcta al archivo de productos
import React, { useState } from 'react';


const Productos = () => {
    const [productos, setProductos] = useState([
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1311269-1200-auto?v=638209803240200000&width=1200&height=auto&aspect=true',
            nombre: "Men's Polo Shirt, Slim Fit Short Sleeve - Pocket",
            precio: 127425 + " $",
            inventario: 20
        },
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1369610-1200-auto?v=638306538187070000&width=1200&height=auto&aspect=true',
            nombre: "Women's Denim Jacket, Straight Fit Trucker Type - Military Green",
            precio: 298900 + " $",
            inventario: 15
        },
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1369611-1200-auto?v=638306538188630000&width=1200&height=auto&aspect=true',
            nombre: "Women's Leather Tennis Shoes, Low Top, Rounded Last",
            precio: 398900 + " $",
            inventario: 15
        },
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1293190-1200-auto?v=638192382354870000&width=1200&height=auto&aspect=true',
            nombre: "Women's Leather Jacket, Biker Silhouette - Suede",
            precio: 1049230 + " $",
            inventario: 15
        },
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1288159-1200-auto?v=638182907792600000&width=1200&height=auto&aspect=true',
            nombre: "Boy's Denim Bermuda Shorts, Fitted Silhouette - Light Blue",
            precio: 98900 + " $",
            inventario: 15
        },
        {
            imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1202612-1200-auto?v=638150937101630000&width=1200&height=auto&aspect=true',
            nombre: "Men's Basic T-Shirt, Slim Fit Round Neck - Pima Cotton",
            precio: 119900 + " $",
            inventario: 15
        },
      ]);
    
      const [carrito, setCarrito] = useState([]);
      const [total, setTotal] = useState(0);


      const cargarProductos = () => {
        return productos.map((producto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <button
                  className="btn btn-success btn-block agregarCarrito"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ));
      }
      
      const abrirCarrito = () => {
        document.getElementById('cartContainer').style.display = 'block';
      }
    
      const cerrarCarrito = () => {
        document.getElementById('cartContainer').style.display = 'none';
      }
    
      const actualizarCarrito = () => {
        const cartItems = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
    
        // Limpiar el carrito antes de actualizar
        cartItems.innerHTML = '';
    
        carrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${item.producto.nombre} - Quantity: ${item.cantidad} - Price: ${item.producto.precio}`;
    
            // Botón para eliminar el producto del carrito
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => eliminarDelCarrito(item.producto));
            listItem.appendChild(deleteButton);
    
            cartItems.appendChild(listItem);
        });
    
        cartTotalElement.textContent = total;
      }
    
      const agregarAlCarrito = (producto) => {
        if (producto.inventario > 0) {
            const productoEnCarrito = carrito.find(item => item.producto.nombre === producto.nombre);
    
            if (productoEnCarrito) {
                productoEnCarrito.cantidad++;
            } else {
                setCarrito([...carrito, { producto, cantidad: 1 }]);
            }
    
            setTotal(total + parseFloat(producto.precio.substring()));
            producto.inventario--;
            actualizarCarrito();
    
            abrirCarrito();
        } else {
            alert(`The product ${producto.nombre} is out of stock`);
        }
      }
    
      const eliminarDelCarrito = (producto) => {
        const productoIndex = carrito.findIndex(item => item.producto.nombre === producto.nombre);
    
        if (productoIndex !== -1) {
            setTotal(total - parseFloat(carrito[productoIndex].producto.precio.substring()));
            carrito.splice(productoIndex, 1);
            producto.inventario++;
        }
    
        actualizarCarrito();
    
        if (carrito.length === 0) {
            cerrarCarrito();
        }
      }
    
      const finalizarCompra = () => {
        alert('Purchase made! (This is a simulation, no real payment will be made)');
      }
    
      return (
        <div>
          <div className="container mt-4">
            <div className="row" id="productContainer"></div>
          </div>
            
          <div id="cartContainer" className="container" style={{ display: 'none' }}>
            <div className="row">
              <div className="col-md-8">
                <h3 className="mb-4">Shopping Cart</h3>
                <ul id="cartItems" className="list-group mb-3"></ul>
                <p className="font-weight-bold">Total: <span id="cartTotal">{total}</span> $</p>
              </div>
              <div className="col-md-4">
                <button id="cerrarCarrito" className="btn btn-danger mb-2 btn-block" onClick={cerrarCarrito}>Close Cart</button>
                <button id="comprarButton" className="btn btn-success btn-block" onClick={finalizarCompra}>Buy</button>
              </div>
            </div>
          </div>
          
          <section className="productos mt-4" id="product-container">
          <div className="container">
          <div className="row">
            {cargarProductos()}
            </div>
          </div>
          </section>
        </div>
      );
}

export default Productos;
