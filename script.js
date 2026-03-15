// Cart ko initialize karein (purane items check karein ya khali array lein)
let cart = JSON.parse(localStorage.getItem('myCart')) || [];

function addToCart(name, price) {
    // Har baar fresh data fetch karein
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];

    // Item add karein
    cart.push({ name: name, price: price });

    // LocalStorage update
    localStorage.setItem('myCart', JSON.stringify(cart));

    alert(name + " added to cart!");
    
    // Direct cart page par bhejna
    window.location.href = "cart.html";
}

function subscribe(){
    alert("Thank you for subscribing to our newsletter!");
}