// Handle Cart & Products
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load products on homepage
if (document.getElementById("product-list")) {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="buyNow(${product.id})">Buy Now</button>
    `;
    container.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart`);
}

// Update Cart Count in Navbar
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => el.textContent = cart.length);
}
updateCartCount();

// Show Cart Items (on cart.html)
if (document.getElementById("cart-items")) {
  const container = document.getElementById("cart-items");
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p>${item.name} - ₹${item.price}</p>
      `;
      container.appendChild(div);
    });
  }
}

// Buy Now (redirect to checkout)
function buyNow(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("buyNow", JSON.stringify(product));
  window.location.href = "checkout.html";
}
