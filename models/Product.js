const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  quantity: Number,
  location: String,
  certified: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
