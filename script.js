let cart = [];
let mpesaBalance = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous items

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - KSh ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = `Total: KSh ${total}`;
}

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validate Kenyan phone number format
    const phoneRegex = /^(\+254|0)?(7[0-9]{8})$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid Kenyan phone number.");
        return;
    }

    // Set default M-Pesa balance
    mpesaBalance = 10000; // Default balance
    alert(`Registration successful! Your default M-Pesa balance is KSh ${mpesaBalance}`);
    
    // Clear form fields
    document.getElementById("registration-form").reset();
});

function checkout() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    if (mpesaBalance <= 0) {
        alert("Insufficient M-Pesa balance. Please add funds.");
        return;
    }

    if (total > mpesaBalance) {
        alert("Insufficient M-Pesa balance for this purchase.");
        return;
    }

    mpesaBalance -= total; // Deduct total from M-Pesa balance
    alert(`Checkout successful! Your remaining M-Pesa balance is KSh ${mpesaBalance}.`);
    
    // Clear the cart
    cart = [];
    updateCart();
}

// You can add more functions or features as needed
