import express from "express";

import { verifyToken } from "../middlewares/verifyToken.js";
import { deleteUser, getuser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/:id",verifyToken, getuser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
