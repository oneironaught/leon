document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
    window.location.href = 'confirmation.html';
});