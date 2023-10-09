document.addEventListener("DOMContentLoaded", function () {
    const openCartBtn = document.getElementById("carrito"); //Selecciona el boton del carrito de compras
    const cartContainer = document.getElementById("cart");
    const addToCartButtons = document.querySelectorAll(".btn-primary");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeCartBtn = document.getElementById("close-cart-btn");
    const openAddToCartButtons = document.querySelectorAll('.btn.btn-primary'); // Selecciona todos los botones "Add to cart"
    const cartContainerAdd = document.getElementById('cart'); 

    const cart = []; // Array para almacenar los productos en el carrito

    const inventory = {
        product1: 10, // Asocia un identificador de producto con su cantidad disponible
        // Agrega más productos según tu estructura HTML
    };


    //Al hacer click en los Add to cart abre la seccion del carrito de compras
    openAddToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            cartContainerAdd.style.display = 'block'; // Abre la sección del carrito
        });
    });
    
    // Al hacer click en el icono del carrito abre la seccion del carrito de compras
    openCartBtn.addEventListener("click", function () {
        cartContainer.style.display = "block";
    });
    
    // Función para agregar un producto al carrito
    function addToCart(productName, price, productId) {
        const item = {
            name: productName,
            price: price,
            id: productId
        };
        cart.push(item);
        updateCartUI();
    }

    // Función para eliminar un producto del carrito
    function removeFromCart(index) {
        // Recupera el producto que se va a eliminar
        const removedProduct = cart[index];
        // Encuentra el producto en el inventario
        const productInventory = inventory[removedProduct.id];
        // Incrementa la cantidad disponible en el inventario
        inventory[removedProduct.id] = productInventory + 1;

        cart.splice(index, 1);
        updateCartUI();
    }

    // Función para actualizar la interfaz de usuario del carrito
    function updateCartUI() {
        cartItemsList.innerHTML = ""; // Limpiar la lista de elementos del carrito
        let totalPrice = 0;

        cart.forEach(function (item, index) {
            const li = document.createElement("li");
            li.innerText = `${item.name} - $${item.price}`;
            
            const removeButton = document.createElement("button");
            removeButton.innerText = "Delete";
            removeButton.classList.add("btn", "btn-danger", "btn-sm");
            removeButton.addEventListener("click", function () {
                removeFromCart(index);
            });

            li.appendChild(removeButton);
            cartItemsList.appendChild(li);
            totalPrice += parseFloat(item.price);

            //Actualiza la cantidad disponible de cada producto en el inventario
            cart.forEach(function (item) {
                const productId = item.id;
                inventory[productId] -= 1;
            });
        });

        cartTotal.innerText = totalPrice.toFixed(2);
    }

    // Evento de clic en el botón "Agregar al carrito"
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const productCard = button.closest(".card");
            const productName = productCard.querySelector(".card-title").innerText;
            const productPrice = productCard.querySelector(".card-text").innerText.replace("$", "");
    
            // Obtener la cantidad disponible del producto
            const productQuantity = parseInt(button.dataset.quantity);
    
            if (productQuantity > 0) {
                addToCart(productName, productPrice);
    
                // Actualizar cantidad disponible en el inventario
                button.dataset.quantity = (productQuantity - 1).toString();
            }
        });
    });

    // Evento de clic en el botón "Comprar"
    checkoutBtn.addEventListener("click", function () {
        // Implementa la funcionalidad de finalizar la compra
        alert("¡Purchase Made!");
        cart.length = 0; // Limpiar el carrito después de la compra
        updateCartUI();
    });

    // Evento de clic en el botón "Eliminar"
    cartItemsList.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("btn-danger")) {
            const itemIndex = event.target.dataset.index;
            removeFromCart(itemIndex);
        }
    });

    // Evento de clic en el botón "Cerrar Carrito"
    closeCartBtn.addEventListener("click", function () {
        document.getElementById("cart").style.display = "none";
    });
});


