const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(403).json({ message: "Forbidden: No token provided" });
  }

  // Token format: "Bearer <token>"
  const token = authorizationHeader.split(" ")[1];

  jwt.verify(token, JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else {
      console.log("Token verified successfully");
    }
    // Save decoded info for later use in controllers
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
