import connectDB from "./app/db.js";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/products/", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`connect to port of ${PORT}`));
