const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

// Routes
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// API Route
app.use("/api/products", productRoutes);

// Start server (no Mongo needed)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
