import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//upload in server 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
})

app.use("/api/auth", authRoutes);
// app.use("/api/user",userRoutes)
app.use("/api/post", postRoutes);

app.listen(5000, () => {
  console.log("Successfully Connection");
});
