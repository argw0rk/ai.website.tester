// JavaScript Document
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${button.parentElement.dataset.name} has been added to your cart!`);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cartCount > 0) {
        alert(`You have ${cartCount} items in your cart. Proceeding to checkout...`);
    } else {
        alert('Your cart is empty!');
    }
});
