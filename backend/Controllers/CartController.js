const User = require('../Models/UserModels');

// ✅ Get user's cart
exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ cartData: user.cartData });
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
// ✅ Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    console.log("🟢 addToCart called:", { userId, productId, quantity });

    const user = await User.findById(userId);
    if (!user) {
      console.log("❌ No user found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    // ensure cartData is object
    if (typeof user.cartData !== "object" || user.cartData === null) {
      user.cartData = {};
    }

    const prevQty = user.cartData[productId] || 0;
    user.cartData[productId] = prevQty + quantity;

    console.log("🟢 Before Save:", user.cartData);

    // 🟢 Tell mongoose the object changed
    user.markModified('cartData');

    await user.save();

    console.log("✅ Saved to DB successfully");
    res.json({ success: true, message: "Item added to cart", cartData: user.cartData });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// ✅ Remove item from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    delete user.cartData[productId];
    await user.save();

    res.json({ success: true, cartData: user.cartData });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// ✅ Clear entire cart
exports.clearCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cartData = {};
    await user.save();

    res.json({ success: true, message: "Cart cleared", cartData: user.cartData });
  } catch (error) {
    console.error("Clear cart error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
