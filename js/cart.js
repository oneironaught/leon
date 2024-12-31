// cart.js

// Initialize cart from localStorage or start with an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(item, price) {
    const product = { item, price };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    alert(`${item} added to cart!`);
    updateCartDisplay();
}

// Function to display cart items
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems || !cartTotal) return; // Check if on the cart page

    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    cart.forEach((product, index) => {
        total += parseFloat(product.price);
        cartItems.innerHTML += `
            <li>
                ${product.item} - $${product.price}
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
            </li>
        `;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Automatically update cart display on page load (if applicable)
document.addEventListener('DOMContentLoaded', updateCartDisplay);