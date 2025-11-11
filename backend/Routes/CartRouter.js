const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
} = require("../Controllers/CartController");

const cartRouter = express.Router();

// Remove an item from cart by productId
cartRouter.delete('/remove/:userId/:productId', removeFromCart);

// Get a single user's cart by userId
cartRouter.get('/single/:userId', getCart);

// Add item to cart
cartRouter.post('/add/:userId', addToCart);

// Clear user's cart
cartRouter.delete('/clear/:userId', clearCart);

module.exports = cartRouter;