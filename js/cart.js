// cart.js

// Initialize cart from localStorage or start with an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in Navbar
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

// Function to add items to the cart
function addToCart(item, price, image = 'images/default.jpg') {
    const product = { item, price, image };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item} added to cart!`);
    updateCartCount();
    updateCartDisplay();
}

// Function to display cart items (on cart.html page)
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCart = document.getElementById('empty-cart');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartTotal.innerText = 'Total: $0.00';
        emptyCart.classList.remove('d-none');
        return;
    }

    emptyCart.classList.add('d-none');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        total += parseFloat(product.price);
        cartItems.innerHTML += `
            <div class="list-group-item d-flex align-items-center justify-content-between">
                <div class="cart-item-details d-flex align-items-center gap-3">
                    <img src="${product.image}" alt="${product.item}" class="cart-item-image">
                    <div>
                        <h5>${product.item}</h5>
                        <p class="mb-0">$${product.price}</p>
                    </div>
                </div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    updateCartCount();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
    updateCartCount();
});