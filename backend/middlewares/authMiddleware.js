import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      //   req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

export const jobmiddleware = async (req, res, next) => {
  if (req.user && req.user.role == "job-seeker") {
    next();
  } else {
    return res.status(400).json({ message: "access denied" });
  }
};

export const employermiddle = async (req, res, next) => {
  if (req.user && req.user.role == "employer") {
    next();
  } else {
    return res.status(400).json({ message: "Access denied" });
  }
};
