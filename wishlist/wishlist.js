

document.addEventListener('DOMContentLoaded', displayWishlist);

function displayWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContainer = document.getElementById('wishlist-container');

  if (!wishlistContainer) {
    console.error('Element with id "wishlist-container" not found in the DOM.');
    return;
  }

  wishlistContainer.innerHTML = '';

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p style="text-align: center; font-size:2.5rem;">Your wishlist is empty.</p>';
    return;
  }

  wishlist.forEach(item => {
    const wishlistItem = document.createElement('div');
    wishlistItem.classList.add('wishlist-item');
    wishlistItem.innerHTML = `
    <div class="wishlist-item" style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #ccc; border-radius: 5px;">
      <div class="image">
        <img src="${item.imgSrc}" alt="${item.title}" width="200" height="200">
      </div>
      <div class="content">
        <h3>${item.title}</h3>
        <p>Author: ${item.author}</p>
        <p>Price: ₹${item.price.toFixed(2)}</p>
        <button onclick="removeFromWishlist('${item.title}')">Remove</button>
      </div>
    </div>
    `;
    wishlistContainer.appendChild(wishlistItem);
  });
}

function removeFromWishlist(title) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(item => item.title !== title);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  displayWishlist();
}