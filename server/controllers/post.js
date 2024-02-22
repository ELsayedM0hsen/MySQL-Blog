import { db } from "../config/db.js";

export const addPost = async (req, res, next) => {
  try {
    const q =
      "INSERT INTO posts (`title`,`desc`,`img`,`cat`,`date`,`uid`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      req.user.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  } catch (error) {
    next(error);
  }
};
export const getPost = async (req, res, next) => {
  try {
    const q =
      "SELECT p.id,`username`,`title`,`desc`,`cat`,p.img,u.img AS userImg,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data[0]);
    });
  } catch (error) {
    next(error);
  }
};
export const getPostes = async (req, res, next) => {
  try {
    const q = req.query.cat
      ? "SELECT * FROM posts WHERE cat = ?"
      : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    next(error);
  }
};
export const updatePost = async (req, res, next) => {
  try {
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";
    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, req.params.id, req.user.id], (err, data) => {
      if (err) return res.status(403).json("You Not Authorized FOR that");
      return res.status(200).json("Post has been updated");
    });
  } catch (error) {
    next(error);
  }
};
export const deletePost = async (req, res, next) => {
  try {
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [req.params.id, req.user.id], (err, data) => {
      if (err) return res.status(403).json("You Not Authorized FOR that");
      return res.status(200).json("Post has been deleted");
    });
  } catch (error) {
    next(error);
  }
};
