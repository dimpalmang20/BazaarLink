6// products.js - Static product list
const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 20,
    image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg",
    description: "Juicy and ripe tomatoes."
  },
  {
    id: 2,
    name: "Potatoes",
    price: 25,
    image: "https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2FRKiZ605RAV8kjDQnxFCWP%2Fb03b8729817c90b29b88d536bfd37ac5%2F9-Unusual-Uses-For-Potatoes.jpg%3Ffm%3Dwebp&w=1920&q=75",
    description: "Fresh and starchy potatoes."
  },
  {
    id: 3,
    name: "Carrot",
    price: 17,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba3FfUO6CI9cySnHdGt1roZY60bdUInxLXQ&s",
    description: "Crunchy and sweet carrots."
  },
  {
    id: 4,
    name: "Cabbage",
    price: 14,
    image: "https://i0.wp.com/live.staticflickr.com/65535/54473906289_30bdfbe1a2_z.jpg?resize=640%2C427&ssl=1",
    description: "Leafy and crisp cabbage."
  },
  {
    id: 5,
    name: "Capsicum",
    price: 35,
    image: "https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2024/08/Capsicum-215200.png?ssl=1",
    description: "Colorful and fresh capsicum."
  },
  {
    id: 6,
    name: "Onion",
    price: 30,
    image: "https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg",
    description: "Strong and flavorful onions."
  },
  {
    id: 7,
    name: "Peas",
    price: 74,
    image: "https://cdn-ilbieip.nitrocdn.com/xqwDdPehmVtcySpgjQnaFLFbBZtNqOso/assets/images/optimized/rev-1562a4e/www.harvst.co.uk/wp-content/uploads/2022/05/peas-scaled.jpeg",
    description: "Tender green peas."
  },
  {
    id: 8,
    name: "Chickpeas",
    price: 85,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrVLXjEaOBtaDWdWGhfXF06bMNewyQ9SOPw&s",
    description: "Protein-rich chickpeas."
  },
  {
    id: 9,
    name: "Radish",
    price: 14,
    image: "https://www.jiomart.com/images/product/original/590000136/white-radish-1-kg-product-images-o590000136-p590000136-0-202409171905.jpg?im=Resize=(1000,1000)",
    description: "White and crisp radish."
  },
  {
    id: 10,
    name: "Corn",
    price: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoWdSHinHRGftyKlR-C9uRHH1Z3PaWOOa3g&s",
    description: "Sweet golden corn."
  },
  {
  id: 11,
  name: "Spinach",
  price: 18,
  image: "https://www.trustbasket.com/cdn/shop/articles/Spinach.webp?v=1686909241",
  description: "Fresh green spinach leaves."
  },
 {
  id: 12,
  name: "Fenugreek Leaves",
  price: 16,
  image: "https://www.greendna.in/cdn/shop/products/Fenugreek-Methi_600x.jpg?v=1602575318",
  description: "Aromatic and nutritious methi."
  },
  {
  id: 13,
  name: "Eggplant",
  price: 20,
  image: "https://www.bradleysmoker.com/cdn/shop/articles/Smoked-Marinated-Eggplant-Recipe-scaled.jpg?v=1675739133",
  description: "Fresh and plump eggplants."
},
{
  id: 14,
  name: "Cauliflower",
  price: 22,
  image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/4/21/GettyImages-1359640206.jpg.rend.hgtvcom.1280.960.85.suffix/1682273000163.webp",
  description: "Clean and crunchy cauliflower."
},
{
  id: 15,
  name: "Bottle Gourd",
  price: 15,
  image: "https://budsnblush.com/cdn/shop/files/F1HybridBottleGourdBudsnblush.png?v=1709075516",
  description: "Light and fresh lauki."
},
{
  id: 16,
  name: "Jackfruit",
  price: 35,
  image: "https://cdn.hswstatic.com/gif/jackfruit1a.jpg",
  description: "Raw jackfruit, tender and fresh."
},
{
  id: 17,
  name: "Mustard Greens",
  price: 20,
  image: "https://www.bristolfarms.com/getmedia/6416a26c-8d9a-4238-ac1e-eadd95b903d3/mustard-greens-scaled-1_1.jpg",
  description: "Sharp-flavored saag leaves."
},
{
  id: 18,
  name: "White Pumpkin",
  price: 25,
  image: "https://m.media-amazon.com/images/I/61ulwHHFUiL._UF1000,1000_QL80_.jpg",
  description: "Mild and fresh ash gourd."
},
{
  id: 19,
  name: "Green chilies",
  price: 40,
  image: "https://www.alsothecrumbsplease.com/wp-content/uploads/2024/05/substitute-for-green-chilies-1-500x500.jpg",
  description: "Spicy and fresh green chilies."
},
{
  id: 20,
  name: "Cherry tomato",
  price: 45,
  image: "https://cdn.mos.cms.futurecdn.net/WaZM7X6HxT5pEZQThL9TLE-1200-80.jpg",
  description: "Juicy and sweet cherry tomatoes."
},

  {
    id: 21,
    name: "Apples",
    price: 100,
    image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1xw:0.94466xh;center,top&resize=1200:*",
    description: "Fresh and juicy apples.",
  },
  {
    id: 22,
    name: "Bananas",
    price: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyEUsHKHb42TRKcFNxenSI9vpUHi0ZMhD_g&s",
    description: "Sweet and ripe bananas."
  },
  {
    id: 23,
    name: "Grapes",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjT-J4hVoo8EfO_s5QauWDFW5QqXAza7NKrA&s",
    description: "Fresh seedless grapes."
  },
  {
    id: 24,
    name: "Mangoes",
    price: 120,
    image: "https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg",
    description: "Juicy seasonal mangoes."
  },
  {
    id: 25,
    name: "Papaya",
    price: 40,
    image: "https://lirp.cdn-website.com/7a5d8045/dms3rep/multi/opt/papaya+fruit-640w.jpg",
    description: "Soft and ripe papaya."
  },
  {
    id: 26,
    name: "Pears",
    price: 70,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYn_QOBGj3YxV1xOkp29oHxUyMCtvdlpYkQ&s",
    description: "Crisp and sweet pears."
  },
  {
    id: 27,
    name: "Pineapple",
    price: 50,
    image: "https://media.self.com/photos/5b4371cc4d0c3c282a8878d3/4:3/w_2560%2Cc_limit/pineapple.jpg",
    description: "Tropical fresh pineapple."
  },
  {
    id: 28,
    name: "Pomegranate",
    price: 90,
    image: "https://toneopeats.com/_next/image?url=https%3A%2F%2Ftoneopeats-strapi-prod.s3.ap-south-1.amazonaws.com%2FPomegranate_Benefits_1c9932b0cc.jpg&w=1920&q=75",
    description: "Juicy red pomegranate."
  },
  {
    id: 29,
    name: "Oranges",
    price: 60,
    image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
    description: "Citrusy and fresh oranges."
  },
  {
    id: 30,
    name: "Cherry",
    price: 140,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8Mh_TCLSwzTfiq_RyY5Vgxo0cZYCnzYRGg&s",
    description: "Sweet red cherries."
  },
  {
    id: 31,
    name: "Chickoo",
    price: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fGru81K57kAViSMb0yZE-dCujb7C0blyQw&s",
    description: "Soft and sweet chickoo."
  },
  {
    id: 32,
    name: "Sugarcane",
    price: 15,
    image: "https://www.agrifarming.in/wp-content/uploads/2022/05/Sugarcane-Yield1-1024x768.jpg",
    description: "Juicy fresh sugarcane."
  },
  {
    id: 33,
    name: "Strawberries",
    price: 180,
    image: "https://extension.colostate.edu/wp-content/uploads/2021/04/07000-fig1.jpg",
    description: "Bright red strawberries."
  },
  {
    id: 34,
    name: "Cucumber",
    price: 25,
    image: "https://cdn-ilbieip.nitrocdn.com/xqwDdPehmVtcySpgjQnaFLFbBZtNqOso/assets/images/optimized/rev-1562a4e/www.harvst.co.uk/wp-content/uploads/2022/04/cucumbers-scaled.jpeg",
    description: "Fresh green cucumbers."
  },
  {
    id: 34,
    name: "Ginger",
    price: 25,
    image: "https://media.post.rvohealth.io/wp-content/uploads/2023/09/ginger-root-still-life-1296x728-header.jpg",
    description: "Refreshing Ginger."
  },
  {
    id: 34,
    name: "Lemon",
    price: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFzTu2yUBdwH5zr0Z28mW238vBeGVnkI3YQ&s",
    description: "Fresh lemons."
  },
  {
    id: 36,
    name: "Rice",
    price: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJlWgt2pYOKkyJyC87ybiAV56fmylG05JZA&s",
    description: "Staple grain rice."
  },
  {
    id: 37,
    name: "Wheat",
    price: 25,
    image: "https://m.media-amazon.com/images/I/71xuH19n5YL._UF1000,1000_QL80_.jpg",
    description: "Whole wheat grains."
  },
  {
    id: 38,
    name: "Red Lentils",
    price: 85,
    image: "https://www.keepingthepeas.com/wp-content/uploads/2022/11/red-lentils-in-wood-bowl-500x375.jpg",
    description: "Protein-rich lentils."
  },
  {
    id: 39,
    name: "Pigeon Peas",
    price: 95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B8W1e6LCP9bcNkFNO2NmW69jTbWCZFJ3_w&s",
    description: "Common Indian dal."
  },
  {
    id: 40,
    name: "Black Lentils",
    price: 90,
    image: "https://www.finedininglovers.com/sites/default/files/article_content_images/black-lentils%C2%A9iStock.jpg",
    description: "Nutritious black dal."
  },
  {
    id: 41,
    name: "Mung Beans",
    price: 70,
    image: "https://cdn.wikifarmer.com/images/detailed/2023/07/Mung-Bean-Plant-Information-Uses-Nutritional-Value-and-Health-Venefits.jpg",
    description: "Sprout-friendly beans."
  },
  {
    id: 42,
    name: "Amaranth",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JsR2_dK4fSExsZC9jd6aGTcg_8kqPrejAw&s",
    description: "Tiny nutritious grain."
  },
  {
    id: 43,
    name: "Flaxseeds",
    price: 110,
    image: "https://www.kolorshealthcare.com/blog/wp-content/uploads/2022/12/Flax-Seeds-Weight-Loss.jpg",
    description: "Rich in omega-3."
  },
  {
    id: 44,
    name: "Sesame",
    price: 90,
    image: "https://i.cdn.newsbytesapp.com/images/l68420250624113622.jpeg",
    description: "Nutty white seeds."
  },
  {
    id: 45,
    name: "Barley",
    price: 35,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/QD/YP/KV/155090048/barley-seeds-500x500-jpg-500x500.jpg",
    description: "Light nutritious grain."
  },
  {
    id: 46,
    name: "Buckwheat",
    price: 95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8DzY9MnzJr9LWyDGZMzSOJv0Z5bSi22IJw&s",
    description: "Gluten-free grain."
  },
  {
    id: 47,
    name: "Poha",
    price: 40,
    image: "https://www.fortheloveofnature.in/cdn/shop/products/PohaWhite_3.jpg?v=1625481756",
    description: "Flattened rice."
  },
  {
    id: 48,
    name: "Ragi",
    price: 60,
    image: "https://naturallyyours.in/cdn/shop/articles/ragi1.jpg?v=1659348826",
    description: "Calcium-rich grain."
  },
  {
    id: 49,
    name: "Bajra",
    price: 55,
    image: "https://5.imimg.com/data5/SELLER/Default/2021/5/GP/NN/AF/11764713/pearl-millet-bajara-.jpg",
    description: "Coarse Indian millet."
  },
  {
    id: 50,
    name: "Jowar",
    price: 50,
    image: "https://i0.wp.com/www.svaguna.com/wp-content/uploads/2019/08/Jowar.jpg?fit=600%2C400&ssl=1",
    description: "Healthy grain jowar."
  }


];

// let cart = [];  // Cart array to store selected products
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty-message'>Your cart is empty.</p>";
    return;
  }

  cart.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div style="flex-grow:1">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p><strong>Price: ₹${p.price}</strong></p>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at that index
  localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
  renderCart(); // Re-render updated cart
  updateCartCount(); // Update cart count in nav if needed
}




function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));  // ✅ Save cart
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
