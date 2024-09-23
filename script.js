let cart = [];
let total = 0;

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const mpesaBalance = document.getElementById('mpesa-balance').value;

    // Save the user data (for demonstration, we'll just log it)
    const userData = {
        name,
        email,
        phone,
        mpesaBalance
    };

    console.log("User Registered:", userData);

    // Prompt the user with their M-Pesa balance
    alert(`Registration successful! Your M-Pesa balance is KSh ${mpesaBalance}`);

    // Optionally, you can clear the form after registration
    document.getElementById('registration-form').reset();
});

// Example functions for addToCart and checkout (you can customize them)
function addToCart(product, price) {
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = `${product} - KSh ${price}`;
    cartItems.appendChild(newItem);
    updateTotal(price);
}

let totalAmount = 0;
function updateTotal(price) {
    totalAmount += price;
    document.getElementById('total').textContent = `Total: KSh ${totalAmount}`;
}

function checkout() {
    alert("Proceeding to checkout...");
    // Implement checkout logic here
}


function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - KSh ${item.price}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    document.getElementById('total').textContent = `Total: KSh ${total}`;
}

function checkout() {
    const phone = prompt("Enter your phone number (e.g., 0701234567):");
    const userCredit = simulateMPESA(phone);

    if (userCredit < total) {
        alert("Insufficient funds. Please top up your MPESA balance.");
        return;
    }

    alert(`Payment successful. Total amount: KSh ${total}.`);
    cart = [];
    updateCartUI();
}

function simulateMPESA(phone) {
    // Simulated MPESA balance
    const simulatedBalance = {
        '0701234567': 5000,
        '0712345678': 3000,
        '0723456789': 1000
    };

    return simulatedBalance[phone] || 0;
}
