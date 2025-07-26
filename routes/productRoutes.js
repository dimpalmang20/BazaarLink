const express = require("express");
const axios = require("axios");
const { parse } = require("csv-parse/sync");

const router = express.Router();

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNCUPPO3E5dWOqcClv6Rkm_04i2P6BWkSW6Lw5Q5xrWkARNHWHcnvEtCleHXn80OkqjvH5Xw63Udmj/pub?output=csv";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(SHEET_URL);
    let csv = response.data;

    // Remove BOM and clean weird characters
    csv = csv.replace(/^\uFEFF/, "").replace(/\r/g, "");

    // Parse CSV
    const rows = parse(csv, {
      skip_empty_lines: true,
      relax_column_count: true,
      trim: true
    });

    // Skip header row
    const products = rows.slice(1).map(row => ({
      timestamp: row[0] || "",
      name: row[1] || "",
      phone: row[2] || "",
      location: row[3] || "",
      product: row[4] || "",
      price: row[5] || "",
      quantity: row[6] || "",
      delivery: row[7] || "",
      image: "https://via.placeholder.com/200"
    }));

    res.json(products);
  } catch (err) {
    console.error("Error fetching CSV:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
