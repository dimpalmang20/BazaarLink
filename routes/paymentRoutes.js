const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET
});

// Create Order
router.post("/order", async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: `order_rcpt_${Date.now()}`
    });
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
