const express = require("express");
const router = express.Router();
const orderController=require('C:/Users/user/OneDrive/Desktop/ECommerce/backend/Controllers/OrderController.js')

// 🟢 Place a new order (COD)
router.post("/place", orderController.placeOrder);

// 🟡 Get all orders (Admin)
router.get("/list", orderController.listAllOrders);

// 🟣 Get user orders
router.get("/get-userorder/:userId", orderController.getUserOrders);

// 🔴 Delete an order
router.delete("/delete/:orderId", orderController.deleteOrders);
console.log("✅ Order router loaded successfully");


module.exports = router;
