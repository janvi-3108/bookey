document.addEventListener("DOMContentLoaded", function () {
    const wishlistContainer = document.getElementById("wishlist-container");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
        wishlist.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("wishlist-item");
            itemDiv.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}" width="100">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="remove-wishlist" data-title="${item.title}">Remove</button>
            `;
            wishlistContainer.appendChild(itemDiv);
        });
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-wishlist")) {
            const title = event.target.getAttribute("data-title");
            wishlist = wishlist.filter(item => item.title !== title);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            location.reload();
        }
    });
});