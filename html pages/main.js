let carts = document.querySelectorAll('.al');

let products = [
    {name: 'chicken 65', tag: 'chicken65', price: 250, inCart: 0, image: 'images/chicken65.jpg'},
    {name: 'chilli chicken', tag: 'chicken_chilli', price: 275, inCart: 0, image: 'images/chicken_chilli.jpg'},
    {name: 'chicken lollipop', tag: 'chicken lollipop', price: 275, inCart: 0, image: 'images/chicken lollipop.jpg'},
    {name: 'chicken tikka', tag: 'CHICKEN TIKKA', price: 250, inCart: 0, image: 'images/CHICKEN TIKKA.jpg'},
    {name: 'chicken majestic', tag: 'chicken majestic', price: 250, inCart: 0, image: 'images/chicken majestic.jpg'},
    {name: 'veg manchurian', tag: 'vegmanchurian', price: 165, inCart: 0, image: 'images/vegmanchurian.jpg'},
    {name: 'spring rolls', tag: 'spring rolls', price: 150, inCart: 0, image: 'images/spring rolls.jpg'},
    {name: 'Paneer 65', tag: 'paneer 65', price: 250, inCart: 0, image: 'images/paneer 65.jpg'},
    {name: 'Paneeer Tikka', tag: 'paneer tikka', price: 250, inCart: 0, image: 'images/paneer tikka.jpg'},
    {name: 'Mushroom manchuria', tag: 'mushroom manchuria', price: 200, inCart: 0, image: 'images/mushroom manchuria.jpg'},
    {name: 'Tomato soup', tag: 'tomato-soup-7', price: 149, inCart: 0, image: 'images/tomato-soup-7.jpg'},
    {name: 'Mojito', tag: 'mojito', price: 149, inCart: 0, image: 'images/mojito.jpg'},
    {name: 'Lassi', tag: 'lassi', price: 99, inCart: 0, image: 'images/lassi.jpg'},
    {name: 'Ferroro automatic', tag: 'ferroro automatic', price: 149, inCart: 0, image: 'images/ferroro automatic.jpg'},
    {name: 'Pista', tag: 'pista', price: 199, inCart: 0, image: 'images/pista.jpg'},
    {name: 'strawbeery', tag: 'strawberry-milkshake', price: 79, inCart: 0, image: 'images/strawberry-milkshake.jpg'},
    {name: 'chicken soup', tag: 'chicken soup', price: 149, inCart: 0, image: 'images/chicken soup.jpg'},
    {name: 'mushroom soup', tag: 'mushroom soup', price: 149, inCart: 0, image: 'images/mushroom soup.jpg'},
    {name: 'mochi', tag: 'mochi', price: 149, inCart: 0, image: 'images/mochi.jpg'},
    {name: 'Rose milk', tag: 'rose-milk', price: 99, inCart: 0, image: 'images/rose-milk.jpg'},
    {name: 'Falooda icecream', tag: 'falooda', price: 110, inCart: 0, image: 'images/falooda.jpg'},
    {name: 'CHHOLE BHATURE', tag: 'chhole bhature', price: 105, inCart: 0, image: 'images/chhole bhature.jpg'},
    {name: 'MASALA CHAI', tag: 'masala chai', price: 50, inCart: 0, image: 'images/masala chai.jpg'},
    {name: 'PANI PURI', tag: 'panipuri', price: 50, inCart: 0, image: 'images/panipuri.jpg'},
    {name: 'PINDI CHANNA', tag: 'Chole Pindi', price: 50, inCart: 0, image: 'images/Chole Pindi.jpg'},
    {name: 'PIZZA', tag: 'pizza', price: 399, inCart: 0, image: 'images/pizza.jpg'},
    {name: 'BIRYANI', tag: 'Biryani', price: 599, inCart: 0, image: 'images/Biryani.jpg'},
    {name: 'PANEER BUTTER MASALA', tag: 'paneerr', price: 125, inCart: 0, image: 'images/paneerr.jpg'},
    {name: 'BUTTER PASTA', tag: 'pasta', price: 140, inCart: 0, image: 'images/pasta.jpg'},
    {name: 'BUTTER NAAN', tag: 'butter naun', price: 135, inCart: 0, image: 'images/butter naun.jpg'},
    {name: 'BRULEE', tag: 'brulee', price: 599, inCart: 0, image: 'images/brulee.jpg'},
    {name: 'MOCHI', tag: 'mochii', price: 135, inCart: 0, image: 'images/mochii.jpg'},
    {name: 'NANAIMO BAR', tag: 'nanaimo bar', price: 99, inCart: 0, image: 'images/nanaimo bar.jpg'},
    {name: 'GULAB JAMUN', tag: 'gulab jamuns', price: 210, inCart: 0, image: 'images/gulab jamuns.jpg'},
    {name: 'PAKHALAVA', tag: 'pakhlava', price: 159, inCart: 0, image: 'images/pakhlava.jpg'},
    {name: 'BROWNNIE', tag: 'Brownie', price: 699, inCart: 0, image: 'images/Brownie.jpg'},
    {name: 'CHARLOTTE CAKE', tag: 'Charlotte Cake', price: 799, inCart: 0, image: 'images/Charlotte Cake.jpg'},
    {name: 'HOT MILK', tag: 'hot mik', price: 249, inCart: 0, image: 'images/hot mik.jpg'},
    {name: 'ROSE COOKIES', tag: 'rose cookies', price: 140, inCart: 0, image: 'images/rose cookies.jpg'},
    {name: 'JALEBIS', tag: 'JILABEI', price: 50, inCart: 0, image: 'images/JILABEI.jpg'}
];

// Add click event listeners to all cart buttons
for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        addToCart(products[i]);
    });
}

function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let existingItem = cartItems.find(item => item.tag === product.tag);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            name: product.name,
            tag: product.tag,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    showToast('Item added to cart!');
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCounts = document.querySelectorAll('.cart span');
    cartCounts.forEach(count => count.textContent = totalItems);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span class="toast-message">${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }, 100);
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productContainer = document.querySelector('.cart-items');
    
    if (!productContainer) return;
    
    if (cartItems.length === 0) {
        productContainer.innerHTML = `
            <div class="empty-cart">
                <ion-icon name="cart-outline" class="empty-cart-icon"></ion-icon>
                <div class="empty-cart-text">Your cart is empty</div>
                <a href="menu.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
    } else {
        productContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <div class="item-details">
                    <img src="${item.image}" alt="${item.name}" class="item-image" onerror="this.src='images/default-food.jpg'">
                    <div class="item-name">${item.name}</div>
                </div>
                <div class="item-price">₹${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.tag}', -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.tag}', 1)">+</button>
                </div>
                <div class="item-total">₹${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
        
        updateSummary();
    }
}

function updateQuantity(tag, change) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = cartItems.find(item => item.tag === tag);
    
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCart();
        updateCartCount();
    }
}

function updateSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `₹${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₹${total.toFixed(2)}`;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (typeof displayCart === 'function') {
        displayCart();
    }
});

        