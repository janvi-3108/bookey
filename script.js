function toggleChatbot() {
    const chatbot = document.getElementById('chatbotWindow');
    chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendOption(option) {
    const chatContent = document.getElementById('chatContent');
    chatContent.innerHTML += `<p><strong>You:</strong> ${option}</p>`;

    let response = '';
    switch(option) {
        case 'Book of the Month':
            response = "📚 Book of the Month: Too Good to Be True by Prajakta Kohli We're thrilled to feature Too Good to Be True by Prajakta Kohli as our Book of the Month! This captivating read is now available. Grab your copy today and dive into a story that’s sure to stay with you long after the last page. ✨ Order now and discover why this book is creating such a buzz!";
            break;
        case 'Mystery Box':
            response = "Get a Mystery Box filled with 12 amazing books for just ₹1500! 📚✨Dive into the excitement of discovering new titles, genres, and authors—all carefully selected to surprise and delight you. Don't miss out on this literary treasure trove! 🛍 Hurry, while stocks last!";
            break;
        case 'Deal of the Day':
            response = "Looking for the Deal of the Day on books? 🛍 We've got you covered! I'll find the best deals for you! 🎁 Explore Now!!";
            break;
        case 'New Arrivals':
            response = 'Check out our latest collection of new arrivals!';
            break;
    }

    typeResponse(response);
}

function typeResponse(response) {
    const chatContent = document.getElementById('chatContent');
    const typingSpeed = -100; // Adjust typing speed (milliseconds per character)
    let index = 0;

    function type() {
        if (index < response.length) {
            chatContent.innerHTML += response.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            chatContent.innerHTML += '<br>'; // Add a line break after the response
        }
    }

    chatContent.innerHTML += `<p><strong>Your Book Buddy:</strong> `;
    type();
}



// mystery box

function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
}

function hideAlert() {
    document.getElementById('alertBox').style.display = 'none';
}

function redirectToCart() {
    window.location.href = "cart.html";
}

// wishlist functionality

document.addEventListener('DOMContentLoaded', () => {
    const wishlistButtons = document.querySelectorAll('.wishlist-button');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', addToWishlist);
    });
});

function addToWishlist(event) {
    const button = event.currentTarget; // Use event.currentTarget to get the button element
    const icon = button.querySelector('i');
    button.classList.toggle('added');
    if (button.classList.contains('added')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
       
    }
}