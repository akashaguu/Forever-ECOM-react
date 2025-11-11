// middleware/Auth.js
const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  const token = req.headers.token; // ✅ must match frontend key

  if (!token) {
    return res.json({ success: false, message: "No token found, please login again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ✅ this is what controller will read
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Invalid token" });
  }
};

module.exports = Auth;
