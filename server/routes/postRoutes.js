import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPostes,
  updatePost,
} from "../controllers/post.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getPostes);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;
