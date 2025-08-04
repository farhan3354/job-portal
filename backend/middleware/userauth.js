// const jwt = require("jsonwebtoken");

// const ensureUser = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   if (!authHeader) {
//     return res.status(403).json({ message: "Unauthorized: No token provided" });
//   }

//   const token = authHeader.split(" ")[1]; // Expecting "Bearer <token>"
//   if (!token) {
//     return res.status(403).json({ message: "Unauthorized: Malformed token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // attach user info to request
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "Invalid JWT token", error });
//   }
// };

// module.exports = ensureUser;
