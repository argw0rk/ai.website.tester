let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productPrice = parseFloat(productElement.dataset.price);
        
        cartCount++;
        totalPrice += productPrice;

        cartItems.push({ name: productName, price: productPrice });
        
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${productName} has been added to your cart!`);
    });
});

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productDescription = productElement.dataset.description;
        const productPrice = productElement.dataset.price;
        const productImage = productElement.querySelector('img').src;

        document.getElementById('modal-product-image').src = productImage;
        document.getElementById('modal-product-name').innerText = productName;
        document.getElementById('modal-product-description').innerText = productDescription;
        document.getElementById('modal-product-price').innerText = `Price: $${productPrice}`;

        document.getElementById('details-modal').style.display = 'block';
    });
});

document.getElementById('add-to-cart-from-modal').addEventListener('click', () => {
    const productName = document.getElementById('modal-product-name').innerText;
    const productPrice = parseFloat(document.getElementById('modal-product-price').innerText.replace('Price: $', ''));

    cartCount++;
    totalPrice += productPrice;

    cartItems.push({ name: productName, price: productPrice });
    
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);

    document.getElementById('details-modal').style.display = 'none';
});

document.getElementById('view-cart').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartModal.style.display = 'block';
});

document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', () => {
        element.closest('.modal').style.display = 'none';
    });
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

document.getElementById('checkout').addEventListener('click', () => {
    if (cartCount > 0) {
        alert(`You have ${cartCount} items in your cart. Proceeding to checkout...`);
        // Reset cart after checkout
        cartCount = 0;
        totalPrice = 0;
        cartItems = [];
        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total-price').textContent = `Total: $0`;
        document.getElementById('cart-modal').style.display = 'none';
    } else {
        alert('Your cart is empty!');
    }
});


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productPrice = parseFloat(productElement.dataset.price);
        const productImage = productElement.querySelector('img').src;

        cartCount++;
        totalPrice += productPrice;

        cartItems.push({ name: productName, price: productPrice, image: productImage });
        
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${productName} has been added to your cart!`);
    });
});

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productDescription = productElement.dataset.description;
        const productPrice = productElement.dataset.price;
        const productImage = productElement.querySelector('img').src;

        document.getElementById('modal-product-image').src = productImage;
        document.getElementById('modal-product-name').innerText = productName;
        document.getElementById('modal-product-description').innerText = productDescription;
        document.getElementById('modal-product-price').innerText = `Price: $${productPrice}`;

        document.getElementById('details-modal').style.display = 'block';
    });
});

document.getElementById('add-to-cart-from-modal').addEventListener('click', () => {
    const productName = document.getElementById('modal-product-name').innerText;
    const productPrice = parseFloat(document.getElementById('modal-product-price').innerText.replace('Price: $', ''));
    const productImage = document.getElementById('modal-product-image').src;

    cartCount++;
    totalPrice += productPrice;

    cartItems.push({ name: productName, price: productPrice, image: productImage });
    
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);

    document.getElementById('details-modal').style.display = 'none';
});

document.getElementById('view-cart').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.name}" class="cart-item-image"> ${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartModal.style.display = 'block';
});

// Close modal functionality
document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', () => {
        element.closest('.modal').style.display = 'none';
    });
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

document.getElementById('checkout').addEventListener('click', () => {
    if (cartCount > 0) {
        alert(`You have ${cartCount} items in your cart. Proceeding to checkout...`);
        // Reset cart after checkout
        cartCount = 0;
        totalPrice = 0;
        cartItems = [];
        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total-price').textContent = `Total: $0`;
        document.getElementById('cart-modal').style.display = 'none';
    } else {
        alert('Your cart is empty!');
    }
});


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productPrice = parseFloat(productElement.dataset.price);
        const productImage = productElement.querySelector('img').src;

        cartCount++;
        totalPrice += productPrice;

        cartItems.push({ name: productName, price: productPrice, image: productImage });
        
        document.getElementById('cart-count').innerText = cartCount;
        alert(`${productName} has been added to your cart!`);
    });
});

document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.dataset.name;
        const productDescription = productElement.dataset.description;
        const productPrice = productElement.dataset.price;
        const productImage = productElement.querySelector('img').src;

        document.getElementById('modal-product-image').src = productImage;
        document.getElementById('modal-product-name').innerText = productName;
        document.getElementById('modal-product-description').innerText = productDescription;
        document.getElementById('modal-product-price').innerText = `Price: $${productPrice}`;

        document.getElementById('details-modal').style.display = 'block';
    });
});

document.getElementById('add-to-cart-from-modal').addEventListener('click', () => {
    const productName = document.getElementById('modal-product-name').innerText;
    const productPrice = parseFloat(document.getElementById('modal-product-price').innerText.replace('Price: $', ''));
    const productImage = document.getElementById('modal-product-image').src;

    cartCount++;
    totalPrice += productPrice;

    cartItems.push({ name: productName, price: productPrice, image: productImage });
    
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);

    document.getElementById('details-modal').style.display = 'none';
});

document.getElementById('view-cart').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"> 
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsList.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartModal.style.display = 'block';

    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const itemPrice = cartItems[index].price;

            // Remove item from cart
            cartItems.splice(index, 1);
            cartCount--;
            totalPrice -= itemPrice;

            // Update the cart display
            document.getElementById('cart-count').innerText = cartCount;
            button.parentElement.remove(); // Remove item from list
            document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
        });
    });
});

// Close modal functionality
document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('click', () => {
        element.closest('.modal').style.display = 'none';
    });
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

document.getElementById('checkout').addEventListener('click', () => {
    if (cartCount > 0) {
        alert(`You have ${cartCount} items in your cart. Proceeding to checkout...`);
        // Reset cart after checkout
        cartCount = 0;
        totalPrice = 0;
        cartItems = [];
        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total-price').textContent = `Total: $0`;
        document.getElementById('cart-modal').style.display = 'none';
    } else {
        alert('Your cart is empty!');
    }
});
