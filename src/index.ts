import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import passRouter from "./routes/passRoute"
import cors from "cors"

const URI: string | undefined = process.env.MONGO_URL;
const PORT: string | undefined = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const corsOptions = {
  origin: 'https://app-secure.vercel.app/',
  methods: 'GET,PUT,PATCH,POST,DELETE', 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions))
app.use("/api/pass",passRouter)




  if (URI) {
    mongoose
      .connect(URI)
      .then(() => console.log("DB Connected"))
      .catch((err) => console.log(err));
  } else {
    console.log("Error While DB Connection");
  }

if (PORT) {
  app.listen(PORT, () => {
    console.log("Connected");
  });
} else {
  console.log("Error While Port Connection");
}
