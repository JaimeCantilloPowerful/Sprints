const productos = [
    {
        imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1311269-1200-auto?v=638209803240200000&width=1200&height=auto&aspect=true',
        nombre: "Men's Polo Shirt, Slim Fit Short Sleeve - Pocket",
        precio: 127425 + " $",
        inventario: 20
    },
    {
        imagen: 'https://chevignon.vtexassets.com/arquivos/ids/1369610-1200-auto?v=638306538187070000&width=1200&height=auto&aspect=true',
        nombre: "Women's Denim Jacket, Straight Fit Trucker Type - Military Green",
        precio: 298.900 + " $",
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

    // Agrega más productos según necesites
]; 

let carrito = [];
let total = 0;

function cargarProductos() {
    const container = document.getElementById('productContainer');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4', 'mb-4');

        productoDiv.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <button class="btn btn-success btn-block agregarCarrito" data-nombre="${producto.nombre}">Add to cart</button>
                </div>
            </div>
        `;

        container.appendChild(productoDiv);
    });
}

function abrirCarrito() {
    document.getElementById('cartContainer').style.display = 'block';
}

function cerrarCarrito() {
    document.getElementById('cartContainer').style.display = 'none';
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Limpiar el carrito antes de actualizar
    cartItems.innerHTML = '';

    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: ${item.producto.precio}`;

        // Botón para eliminar el producto del carrito
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => eliminarDelCarrito(item.producto));
        listItem.appendChild(deleteButton);

        cartItems.appendChild(listItem);
    });

    cartTotalElement.textContent = total;
}

function agregarAlCarrito(producto) {
    if (producto.inventario > 0) {
        const productoEnCarrito = carrito.find(item => item.producto.nombre === producto.nombre);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({ producto, cantidad: 1 });
        }

        total += parseFloat(producto.precio.substring()); // Convierte el precio a un número y suma al total
        producto.inventario--;
        actualizarCarrito();

        abrirCarrito(); // Abre el carrito al agregar un producto
    } else {
        alert(`The product ${producto.nombre} is out of stock`);
    }
}

function eliminarDelCarrito(producto) {
    const productoIndex = carrito.findIndex(item => item.producto.nombre === producto.nombre);

    if (productoIndex !== -1) {
        total -= parseFloat(carrito[productoIndex].producto.precio.substring()); // Resta el precio eliminado al total
        carrito.splice(productoIndex, 1);
        producto.inventario++;
    }

    actualizarCarrito();

    if (carrito.length === 0) {
        cerrarCarrito(); // Cierra el carrito cuando no hay productos en él
    }
}

function finalizarCompra() {
    alert('¡Compra realizada! (Esta es una simulación, no se realizará ningún pago real)');
}

window.addEventListener('load', cargarProductos);

// Agregar evento al botón de comprar
document.getElementById('comprarButton').addEventListener('click', finalizarCompra);

// Agregar eventos a los botones de agregar al carrito
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('agregarCarrito')) {
        const nombreProducto = event.target.dataset.nombre;
        const producto = productos.find(p => p.nombre === nombreProducto);
        agregarAlCarrito(producto);
    }
});

// Evento para abrir el carrito desde el botón de la barra de navegación
document.getElementById('carrito').addEventListener('click', abrirCarrito);

// Evento para cerrar el carrito
document.getElementById('cerrarCarrito').addEventListener('click', cerrarCarrito);


