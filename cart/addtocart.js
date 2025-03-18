document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();

    const addToCartButtons = document.querySelectorAll(".btn-primary");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const card = this.closest(".card");
            const title = card.querySelector(".card-title").innerText;
            const author = card.querySelector(".card-text").innerText;
            const price = parseFloat(card.querySelector(".card-text-1").innerText.replace("₹", "").trim());
            const imgSrc = card.querySelector(".card-img-top").getAttribute("src");

            addToCart(title, author, price, imgSrc);
            showCartAlert();
        });
    });
});

function addToCart(title, author, price, imgSrc) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ title, author, price, imgSrc, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.innerText = totalItems;
    }
}

function showCartAlert() {
    const alert = document.createElement('div');
    alert.className = 'cart-alert';
    alert.innerText = 'Item added to cart!';
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 2000);
}