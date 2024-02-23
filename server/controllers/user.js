import { db } from "../config/db.js";

export const getuser = async (req, res, next) => {
  try {
    const q = "SELECT `username`, `email`, `img` FROM users WHERE id = ?";

    db.query(q, [req.user.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data[0]);
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const q =
      "UPDATE users SET `username`=?, `email`=?, `img`=? WHERE `id` = ?";
    const values = [req.body.username, req.body.email, req.body.img];

    db.query(q, [...values, req.user.id], (err, data) => {
      if (err)
        return res.status(403).json({ message: "Failed to update user." });
      return res.status(200).json("User has been updated");
    });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const q = "DELETE FROM users WHERE `id` = ?";

    db.query(q, [req.user.id], (err, data) => {
      if (err)
        return res.status(403).json({ message: "Failed to delete user." });
      return res.status(200).json("User has been deleted");
    });
  } catch (error) {
    next(error);
  }
};
