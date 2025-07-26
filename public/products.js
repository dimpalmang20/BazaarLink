// products.js - Static product list
const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 20,
    image: "https://via.placeholder.com/200?text=Tomatoes",
    description: "Farm-fresh, organic tomatoes.",
  },
  {
    id: 2,
    name: "Potatoes",
    price: 25,
    image: "https://via.placeholder.com/200?text=Potatoes",
    description: "High-quality, fresh potatoes.",
  },
  {
    id: 3,
    name: "Soyabean",
    price: 70,
    image: "https://via.placeholder.com/200?text=Soyabean",
    description: "Rich in protein, premium soybeans.",
  }
];

let cart = [];  // Cart array to store selected products
let orders = []; // Orders array

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="buyNow(${p.id})">Buy Now</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  alert(product.name + " added to cart");
  updateCartCount();
}

function buyNow(id) {
  const product = products.find(p => p.id === id);
  orders.push(product);
  alert("Order placed for " + product.name);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}
