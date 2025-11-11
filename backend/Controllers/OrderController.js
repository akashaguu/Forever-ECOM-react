const Order = require('../Models/OrderModels')
const User = require('../Models/UserModels')


//placing order using COD

exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.json({ status: false, message: "Missing required fields" });
    }

    const newOrder = new Order({
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });

    const savedOrder = await newOrder.save();
    console.log("✅ Order saved:", savedOrder);
    res.json({ status: true, message: "Order Placed", order: savedOrder });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.json({ status: false, message: error.message });
  }
};
exports.listAllOrders=async(req,res)=>{
    try{
    const orders=await Order.find()
    res.json({ success:true,message: "all orders", orders});
      } catch (err) {
        res.status(400).json({ message: "bad request", err });
      }
    }
// exports.getUserOrders = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const userOrders = await Order.find({ userId }); // ✅ find() not findById
//     if (!userOrders || userOrders.length === 0) {
//       return res.json({ success: false, message: "No orders found for this user" });
//     }

//     res.json({ success: true, message: "Orders fetched successfully", orders: userOrders });
//   } catch (err) {
//     res.status(400).json({ success: false, message: "Error fetching user orders", err });
//   }
// };


exports.getUserOrders = async (req, res) => {
  try {
    const userOrders = await Order.find({ userId: req.params.userId });

    if (!userOrders || userOrders.length === 0) {
      return res.json({ success: false, message: "No orders found" });
    }

    res.json({
      success: true,
      message: "User orders fetched successfully",
      orders: userOrders,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error in server", err });
  }
};



// ✅ Delete Order by ID (Admin or User Cancel)
exports.deleteOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, message: "Order deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Error deleting order", err });
  }
};