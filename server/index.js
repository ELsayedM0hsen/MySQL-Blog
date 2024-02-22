import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/user",userRoutes)
app.use("/api/post", postRoutes);

app.listen(5000, () => {
  console.log("Successfully Connection");
});
