let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} 
        <button onclick="removeItem(${index})">Remove</button>`;
        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("🛒 Your cart is empty!");
    } else {
        alert(`🎉 Order placed!\nTotal: ₹${total}`);
        cart = [];
        total = 0;
        displayCart();
    }
}