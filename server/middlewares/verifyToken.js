import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const q = "SELECT * FROM users WHERE id = ?";

    db.query(q, [decoded.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(403).json("User not found");
      req.user = data[0];
      next();
    });
  } catch (error) {
    next("Not Authorized token expired, Please Login again");
  }
};
